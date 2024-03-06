import { cookies } from "next/headers";

import { User } from "@shared/domain/entities/user";

import { ActionHandler } from "../../";

export const getAccount: ActionHandler<{}, Promise<User>> = async (
  _data,
  useCases
) => {
  const { user } = await (
    await useCases["get-user"].execute({
      access_token: cookies().get("token")?.value as string,
    })
  ).data;

  return user;
};
