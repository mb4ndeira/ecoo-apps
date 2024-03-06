import axios from "axios";

import { UseCaseHandler } from "@shared/core/UseCase";
import { WARNINGS } from "@shared/next/warnings";

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
> = async (data, _stubbed, { setOrStub }) => {
  const user = User.create(data);

  await setOrStub({
    real: async () => {
      await axios
        .post(`${process.env.API_URL}/users`, {
          email: user.email,
          cellphone: user.cellphone,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          cpf: user.cpf,
        })
        .catch((error) => {
          const response = error.response;

          if (response && response.status !== 201) {
            if (response.status === 400) {
              throw new Error(
                WARNINGS["server"]["general"]["invalid-body-error"][
                  "server_message"
                ]
              );
            }

            if (response.status === 409) {
              throw new Error(
                WARNINGS["server"]["/users"]["existent-user-error"][
                  "server_message"
                ]
              );
            }

            throw new Error(response.data.message);
          }
        });
    },
    stub: ["user", user],
  });

  return {
    user,
  };
};
