import {
  ExceptionReturn,
  SuccessReturn,
  UseCaseHandler,
} from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";
import { USE_CASE_EXCEPTIONS } from "@shared/warnings";

interface LoginData {
  email: string;
  password: string;
}

export const loginAgribusiness: UseCaseHandler<
  LoginData,
  { token: string }
> = async (data, stubbed, _operations) => {
  if (!stubbed) {
    const { token } = await ecooAPIHTTPProvider
      .authenticateUser(data)
      .then((response) => response.data);

    if (!token) {
      throw new ExceptionReturn(USE_CASE_EXCEPTIONS["login-2"], null);
    }

    const { role } = await ecooAPIHTTPProvider
      .getUser(token)
      .then((response) => response.data);

    if (role !== "PRODUCER") {
      throw new ExceptionReturn(USE_CASE_EXCEPTIONS["login-2"], null);
    }

    return new SuccessReturn({ token });
  }

  return new SuccessReturn({ token: "blabla" });
};
