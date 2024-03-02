import { UseCaseHandler } from "@shared/core/UseCase";

import { Agribusiness } from "../entities/agribusiness";
import { Account } from "../entities/account";

export const registerAgribusiness: UseCaseHandler<
  Promise<{ agribusiness: Agribusiness }>
> = async (_stubbed, { getOrStub, setOrStub }) => {
  const agribusiness = Agribusiness.create({
    name: "Fazenda Teixeira",
    caf: "223989203092",
  });

  getOrStub({
    real: () => {
      // call api and handle errors
    },
    stub: [
      "account",
      Account.create({
        email: "test@gmail.com",
        password: "password",
        cellphone: "519876543",
      }),
    ],
  });

  setOrStub({
    real: () => {},
    stub: ["agribusiness", agribusiness],
  });

  return {
    agribusiness,
  };
};
