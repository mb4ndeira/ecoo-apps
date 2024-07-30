"use server";
import { cookies } from "next/headers";
import { CycleDTO } from "@shared/domain/dtos/cycle-dto";

export async function GetCycles() {
  const token = cookies().get("token")?.value;

  if (token) {
    try {
      const response = await fetch(`${process.env.API_URL}/cycles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const reply = await response.json() as CycleDTO[];

      return {
        reply,
      };
    } catch (error: any) {
      console.error(error);
    }
  }
}
