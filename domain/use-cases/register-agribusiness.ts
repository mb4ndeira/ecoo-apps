import { UseCaseHandler } from "@shared/core/UseCase";
import { WARNINGS } from "@shared/next/warnings";

import { Agribusiness } from "../entities/agribusiness";

interface RegisterAgribusinessData {
  name: string;
  caf: string;
  accessToken: string;
}

export const registerAgribusiness: UseCaseHandler<
  RegisterAgribusinessData,
  Promise<{ agribusiness: Agribusiness }>
> = async (data, _stubbed, { setOrStub }, fetch) => {
  const agribusiness = Agribusiness.create({
    name: "Fazenda Teixeira",
    caf: "223989203092",
  });

  await setOrStub({
    real: async () => {
      const response = await (
        await fetch(`${process.env.API_URL}/agribusinesses`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.accessToken}`,
          },
          body: JSON.stringify({ caf: data.caf, name: data.name }),
        }).catch((err) => {
          console.error(err);
          throw err;
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
            WARNINGS["server"]["/agribusiness"]["existent-agribusiness-error"][
              "server_message"
            ]
          );

        throw new Error(response.message);
      }
    },
    stub: ["agribusiness", agribusiness],
  });

  return {
    agribusiness,
  };
};
