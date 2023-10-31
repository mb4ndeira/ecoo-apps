'use server'

import { AuthenticationForm } from "./page";

export async function onSubmitLog({ email, password }: AuthenticationForm) {
  console.log(email, password)
}