import { AuthenticationForm } from "@/app/inicio/components/authentication"

export async function authenticate({ email, password }: AuthenticationForm) {
  console.log(email, password)
}