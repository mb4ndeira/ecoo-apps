import { AuthenticationForm } from "@/app/login/components/authentication"

export async function authenticate({ email, password }: AuthenticationForm) {
  console.log(email, password)
}