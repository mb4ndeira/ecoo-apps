import { UseCaseHandler } from "@shared/core/UseCase";

import { USE_CASES } from ".";
import { Agribusiness } from "../entities/agribusiness";

interface RegisterAgribusinessData {
  email: string;
  password: string;
  name: string;
  caf: string;
}

export const registerAgribusiness: UseCaseHandler<
  RegisterAgribusinessData,
  Promise<{ agribusiness: Agribusiness }>
> = async (data, _stubbed, { setOrStub }, axios) => {
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

  await setOrStub({
    real: async () => {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/agribusinesses`,
        {
          caf: data.caf,
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    stub: ["agribusiness", agribusiness],
  });

  return {
    agribusiness,
  };
};
