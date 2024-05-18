import { User } from "@shared/domain/entities/user";
import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";

import { ActionHandler } from "../../";

interface CreateAccountData {
  email: string;
  cellphone: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

export const createAccount: ActionHandler<
  CreateAccountData,
  Promise<User>
> = async (data, useCases) => {
  const result = await await useCases["create-user"].execute(data);

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data?.user;
};
