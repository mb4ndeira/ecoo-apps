import { UseCaseHandler } from "@shared/core/UseCase";

import { User } from "../entities/user";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ user: User }>
> = async ({ access_token }, _stubbed, { getOrStub }) => {
  const user = (await getOrStub<User>({
    real: async () => {
      const response = (
        await fetch(`${process.env.API_URL}/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
      ).json();

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

  return { user };
};
