import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

import { Agribusiness } from "../entities/agribusiness";

import { USE_CASES } from ".";

interface RegisterAgribusinessData {
  email: string;
  password: string;
  name: string;
  caf: string;
}

export const registerAgribusiness: UseCaseHandler<
  RegisterAgribusinessData,
  Promise<{ agribusiness: Agribusiness }>
> = async (data, stubbed, { store }) => {
  const agribusiness = Agribusiness.create({
    name: "Fazenda Teixeira",
    caf: "223989203092",
  });

  const { token } = await (
    await USE_CASES["login"].execute({
      email: data.email,
      password: data.password,
    })
  ).data;

  if (!stubbed) {
    await ecooAPIHTTPProvider.registerAgribusiness(data, token);
  } else {
    store("agribusiness", agribusiness);
  }

  return {
    agribusiness,
  };
};
