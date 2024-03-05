import { cookies } from "next/headers";

import { User } from "@shared/domain/entities/user";

import { ActionHandler } from "../../";

interface LoginData {
  email: string;
  password: string;
}

export const login: ActionHandler<LoginData, Promise<User>> = async (
  data,
  useCases
) => {
  const { user } = await (await useCases["login"].execute(data)).data;

  if (user)
    if (useCases["login"].stubbed) cookies().set("access_token", "blabla");

  return user;
};
