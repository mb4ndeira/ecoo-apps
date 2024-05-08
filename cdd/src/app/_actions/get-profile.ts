"use server";

import { cookies } from "next/headers";
import { USE_CASES } from "@shared/domain/use-cases";

export async function getProfile() {
  const token = cookies().get("token")?.value as string;

  if (token) {
    try {
      const user = await (
        await USE_CASES["get-user"].execute({ access_token: token })
      ).data;
      return user.me;
    } catch (error) {
      console.error("Erro ao fazer a chamada à API:", error);
    }
  } else {
    throw new Error("Token não encontrado");
  }
}
