import { cookies } from "next/headers";

import { ActionHandler } from "..";

interface RegisterAgribusinessData {
  agribusiness_name: string;
  caf: string;
}

export const registerAgribusiness: ActionHandler<
  RegisterAgribusinessData,
  void
> = async (data, useCases) => {
  const { agribusiness } = await (
    await useCases["register-agribusiness"].execute({
      caf: data.caf,
      name: data.agribusiness_name,
      accessToken: cookies().get("access_token")?.value as string,
    })
  ).data;

  return agribusiness;
};
