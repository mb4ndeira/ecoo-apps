import { cookies } from "next/headers";

import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "../../";

interface LoginData {
  email: string;
  password: string;
}

export const loginAgribusiness: ActionHandler<
  LoginData,
  Promise<void>
> = async (data, useCases) => {
  const result = await useCases["login-agribusiness"].execute(data);

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  cookies().set("token", (result as SuccessReturn<any>).data.token);
};
