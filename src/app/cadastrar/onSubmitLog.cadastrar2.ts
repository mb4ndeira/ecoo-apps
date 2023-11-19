"use server";

import { AuthenticationForm } from "./components/Step2";

export async function onSubmitLog({ caf, cpf, cell }: AuthenticationForm) {
  console.log(caf, cpf, cell);
}
