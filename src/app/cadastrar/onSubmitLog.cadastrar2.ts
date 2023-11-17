'use server'

import { AuthenticationForm } from "./components/Cadastrar2"

export async function onSubmitLog({ caf, cpf, cell }: AuthenticationForm) {
  console.log(caf, cpf, cell)
}