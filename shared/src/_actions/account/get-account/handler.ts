import { cookies } from "next/headers";

import { ActionHandler } from "../../";

export const getAccount: ActionHandler<
  {},
  Promise<{ name: string; email: string }>
> = async (_data, useCases) => {
  const { me } = await (
    await useCases["get-user"].execute({
      access_token: cookies().get("token")?.value as string,
    })
  ).data;

  return me;
};
