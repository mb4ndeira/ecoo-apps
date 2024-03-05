import { UseCaseHandler } from "@shared/core/UseCase";

import { User } from "../entities/user";

interface LoginData {
  email: string;
  password: string;
}

export const login: UseCaseHandler<LoginData, Promise<{ user: User }>> = async (
  data,
  _stubbed,
  { setOrStub }
) => {
  const user = (await setOrStub({
    real: async (): Promise<User> => {
      const response = await fetch(`${process.env.API_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => response.json());

      if (response.code !== 200) {
        throw new Error(response.message);
      }

      return response;
    },
    stub: [
      "user",
      User.create({
        email: "suporte@ecoo.org.br",
        cellphone: 51123456789,
        password: "password123",
        first_name: "Eduardo",
        last_name: "Teixeira",
        cpf: "46934516907",
      }),
    ],
  })) as User;

  return {
    user,
  };
};
