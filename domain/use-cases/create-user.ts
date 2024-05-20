import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

import { User } from "../entities/user";

interface CreateAccountData {
  email: string;
  cellphone: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

export const createAccount: UseCaseHandler<
  CreateAccountData,
  { user: User }
> = async (data, stubbed, { store }) => {
  const user = User.create(data);

  if (stubbed) {
    return new SuccessReturn({ user });
  }

  await ecooAPIHTTPProvider.registerUser({
    email: user.email,
    cellphone: user.cellphone,
    first_name: user.first_name,
    last_name: user.last_name,
    password: user.password,
    cpf: user.cpf,
  });
  await store("user", user);

  return new SuccessReturn({ user });
};
