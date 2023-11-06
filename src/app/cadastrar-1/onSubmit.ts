'use server'

import { AuthenticationForm } from "./page";

export async function onSubmitLog({ nome, email, senha }: AuthenticationForm) {
  console.log(nome, email, senha)
}