import { nextAxios as axios } from "@shared/next/next-axios";
import { sentry } from "@shared/next/next-sentry";

import { USE_CASE_ERRORS } from "@shared/warnings";

import {
  EcooAPIRouteParams,
  GenericStatusCodes,
  IEcooAPI,
} from "./types/IEcooAPI";

const handleExceptions = (response: { status: GenericStatusCodes }): void => {
  console.error(response);

  const { status } = response;
  if (status === 400) throw new Error(USE_CASE_ERRORS["general-1"]);
  if (status === 403) throw new Error(USE_CASE_ERRORS["general-2"]);
  if (status === 409) throw new Error(USE_CASE_ERRORS["general-3"]);

  sentry.captureException(response);
  throw new Error(USE_CASE_ERRORS["general-4"]);
};

const defineServiceMethod = <T extends keyof IEcooAPI>(
  handler: (...params: EcooAPIRouteParams[T]) => ReturnType<IEcooAPI[T]>,
  errorHandler?: (
    error: Error & { response: { status: number } }
  ) => ReturnType<IEcooAPI[T]>
) => {
  return async (...params: EcooAPIRouteParams[T]) => {
    try {
      return await handler(...params);
    } catch (error: any) {
      if (errorHandler) {
        const errorHandlerResponse = errorHandler(error);
        if (errorHandlerResponse) return errorHandlerResponse;
      }

      return handleExceptions(error.response) as any;
    }
  };
};

export const ecooAPIHTTPProvider: IEcooAPI = {
  registerUser: defineServiceMethod<"registerUser">(async (user_data) => {
    const response = (await axios.post(`${process.env.API_URL}/users`, {
      email: user_data.email,
      cellphone: user_data.cellphone,
      first_name: user_data.first_name,
      last_name: user_data.last_name,
      password: user_data.password,
      cpf: user_data.cpf,
    })) as any;

    return { data: response.data, status: 201 };
  }),
  authenticateUser: defineServiceMethod<"authenticateUser">(
    async (user_data) => {
      const response = await axios.post(
        `${process.env.API_URL}/auth`,
        {
          email: user_data.email,
          password: user_data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return { data: response.data, status: 200 };
    }
  ),
  getUser: defineServiceMethod<"getUser">(async (access_token) => {
    const response = await axios.get(`${process.env.API_URL}/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    return { data: response.data, status: 200 };
  }),
  getProducts: defineServiceMethod<"getProducts">(async (access_token) => {
    const response = await axios.get(`${process.env.API_URL}/products/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    return { data: response.data, status: 200 };
  }),
  registerAgribusiness: defineServiceMethod<"registerAgribusiness">(
    async (agribusiness_data, access_token) => {
      const response = await axios.post(
        `${process.env.API_URL}/agribusinesses`,
        {
          caf: agribusiness_data.caf,
          name: agribusiness_data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      return { data: response.data, status: 201 };
    }
  ),
};
