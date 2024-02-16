"use server";

import { AuthenticationForm } from "./components/Step2";

export async function onSubmitLog({ first_name, last_name, cpf }: AuthenticationForm) {
  console.log(first_name, last_name, cpf);
}
