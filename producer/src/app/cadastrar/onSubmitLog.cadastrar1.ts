"use server";

import { AuthenticationForm } from "./components/Step1";

export async function onSubmitLog({ email, cellphone, password }: AuthenticationForm) {
  console.log(email, cellphone, password);
}
