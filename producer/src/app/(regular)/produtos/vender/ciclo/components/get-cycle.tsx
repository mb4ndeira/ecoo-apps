"use server";
import { cookies } from "next/headers";

interface CycleData {
  id: string;
  alias: string;
  offering: number[];
  ordering: number[];
  dispatching: number[];
}

export async function getCycles() {
  const token = cookies().get("token")?.value;

  if (token) {
    try {
      const response = await fetch("http://localhost:3333/cycles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const reply = await response.json();

      return {
        reply,
      };
    } catch (error: any) {
      console.log(error);
    }
  }
}
