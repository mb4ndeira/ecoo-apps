'use server'

import { AuthenticationForm } from "./page";

export async function onSubmitLog({ caf, cpf, cell }: AuthenticationForm) {
  console.log(caf, cpf, cell)
}