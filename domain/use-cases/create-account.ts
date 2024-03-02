import { UseCaseHandler } from "@shared/core/UseCase";

import { Account } from "../entities/account";

export const createAccount: UseCaseHandler<
  Promise<{ account: Account }>
> = async (_stubbed, { setOrStub }) => {
  const account = Account.create({
    email: "test@gmail.com",
    password: "password",
    cellphone: "519876543",
  });

  setOrStub({
    real: () => {},
    stub: ["account", account],
  });

  return {
    account,
  };
};
