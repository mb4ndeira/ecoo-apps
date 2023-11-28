"use server";

import { AuthenticationForm } from "./components/Step1";

export async function onSubmitLog({ nome, email, senha }: AuthenticationForm) {
  console.log(nome, email, senha);
}
