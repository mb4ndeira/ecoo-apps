"use server"
import { AuthenticationForm } from "../components/authentication"

export async function authenticate({ email, password }: AuthenticationForm) {
  console.log(email, password)
}