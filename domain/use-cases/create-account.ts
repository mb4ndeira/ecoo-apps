import { UseCaseHandler } from "@shared/core/UseCase";
import { WARNINGS } from "@shared/next/warnings";

import { User } from "../entities/user";

interface CreateAccountData {
  email: string;
  cellphone: number;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

export const createAccount: UseCaseHandler<
  CreateAccountData,
  Promise<{ user: User }>
> = async (data, _stubbed, { setOrStub }) => {
  const user = User.create(data);

  await setOrStub({
    real: async () => {
      const response = await (
        await fetch(`${process.env.API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            cellphone: user.cellphone,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password,
            cpf: user.cpf,
          }),
        })
      ).json();

      if (response.code !== 201) {
        if (response.code === 400)
          throw new Error(
            WARNINGS["server"]["general"]["invalid-body-error"][
              "server_message"
            ]
          );

        if (response.code === 409)
          throw new Error(
            WARNINGS["server"]["/users"]["existent-user-error"][
              "server_message"
            ]
          );

        throw new Error(response.message);
      }
    },
    stub: ["user", user],
  });

  return {
    user,
  };
};
