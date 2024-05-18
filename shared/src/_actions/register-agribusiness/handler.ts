import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "..";

interface RegisterAgribusinessData {
  email: string;
  password: string;
  agribusiness_name: string;
  caf: string;
}

export const registerAgribusiness: ActionHandler<
  RegisterAgribusinessData,
  void
> = async (data, useCases) => {
  const result = await await useCases["register-agribusiness"].execute({
    email: data.email,
    password: data.password,
    caf: data.caf,
    name: data.agribusiness_name,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>)?.data.agribusiness;
};
