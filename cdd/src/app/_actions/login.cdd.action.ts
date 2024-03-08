'use server'

import { cookies } from "next/headers";

interface loginProps {
  email: string;
  password: string;
}

export const loginAccount = async ({ email, password }: loginProps) => {
  try {
    const response = await fetch("http://localhost:3333/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const reply = await response.json();

    if (response.status !== 200) {
      return { reply };
    }

    cookies().set('token', reply.token)

    return { reply };
  } catch (error) {
    console.error(error);
  }
};