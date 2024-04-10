import { UseCaseHandler } from "@shared/core/UseCase";

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
  Promise<{ user: User }>
> = async (data, stubbed, { store }, axios) => {
  const user = User.create(data);

  if (!stubbed) {
    await axios.post(`${process.env.API_URL}/users`, {
      email: user.email,
      cellphone: user.cellphone,
      first_name: user.first_name,
      last_name: user.last_name,
      password: user.password,
      cpf: user.cpf,
    });
  } else {
    await store("user", user);
  }

  return {
    user,
  };
};
