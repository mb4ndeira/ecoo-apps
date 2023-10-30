'use server'

import { authenticate } from "../api/auth/authenticate";
import { AuthenticationForm } from "./page";

interface AuthenticationProps {
  authenticate: ({ email, password }: AuthenticationForm) => void
}

export async function onSubmit({ email, password }: AuthenticationForm) {
  authenticate({
    email,
    password
  })
}