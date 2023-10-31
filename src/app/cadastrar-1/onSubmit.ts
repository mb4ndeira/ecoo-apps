'use server'

import { AuthenticationForm } from "./page";

export async function onSubmitLog({ name, email, password }: AuthenticationForm) {
  console.log(name, email, password)
}