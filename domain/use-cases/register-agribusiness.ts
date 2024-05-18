import {
  ExceptionReturn,
  SuccessReturn,
  UseCaseHandler,
} from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";
import { USE_CASE_EXCEPTIONS } from "@shared/warnings";

import { Agribusiness } from "../entities/agribusiness";

import { USE_CASES } from ".";

interface RegisterAgribusinessData {
  email: string;
  password: string;
  name: string;
  caf: string;
}

export const registerAgribusiness: UseCaseHandler<
  RegisterAgribusinessData,
  { agribusiness: Agribusiness }
> = async (data, stubbed, { store }) => {
  const agribusiness = Agribusiness.create({
    name: "Fazenda Teixeira",
    caf: "223989203092",
  });

  const loginReturn = await USE_CASES["login-generic"].execute({
    email: data.email,
    password: data.password,
  });

  if (!loginReturn.data) {
    return new ExceptionReturn(USE_CASE_EXCEPTIONS["register-agribusiness-2"]);
  }

  if (!stubbed) {
    await ecooAPIHTTPProvider.registerAgribusiness(
      data,
      (loginReturn.data as any).token
    );
  } else {
    store("agribusiness", agribusiness);
  }

  return new SuccessReturn({ agribusiness });
};
