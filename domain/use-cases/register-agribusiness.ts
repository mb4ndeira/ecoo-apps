import { UseCaseHandler } from "@shared/core/UseCase";
import { WARNINGS } from "@shared/next/warnings";

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
      await axios
        .post(
          `${process.env.API_URL}/agribusinesses`,
          {
            caf: data.caf,
            name: data.name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((response) => {
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
                WARNINGS["server"]["/agribusiness"][
                  "existent-agribusiness-error"
                ]["server_message"]
              );
            }

            console.error(response);

            throw new Error(response.statusText);
          }
        });
    },
    stub: ["agribusiness", agribusiness],
  });

  return {
    agribusiness,
  };
};
