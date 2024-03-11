import { cookies } from "next/headers";

import { ActionHandler } from "../../";

interface LoginData {
  email: string;
  password: string;
}

export const login: ActionHandler<LoginData, Promise<void>> = async (
  data,
  useCases
) => {
  const { token } = await (await useCases["login"].execute(data)).data;

  cookies().set("token", token);
};
