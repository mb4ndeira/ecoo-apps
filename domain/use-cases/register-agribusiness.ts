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
  const { name, caf, password, email } = data;
  const agribusiness = Agribusiness.create({
    name,
    caf,
  });

  const loginReturn = await USE_CASES["login-generic"].execute({
    email,
    password,
  });

  if (!loginReturn.data) {
    return new ExceptionReturn(USE_CASE_EXCEPTIONS["register-agribusiness-2"]);
  }

  if (!stubbed) {
    await ecooAPIHTTPProvider.registerAgribusiness(
      { name, caf },
      (loginReturn.data as any).token
    );
  } else {
    store("agribusiness", agribusiness);
  }

  return new SuccessReturn({ agribusiness });
};
