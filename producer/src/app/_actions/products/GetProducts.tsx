'use server';
import { cookies } from "next/headers";

interface GetProducts {
  product: string;
  page: number;
}

export async function GetProducts({ product, page }: GetProducts) {
  const token = cookies().get('token')?.value;

  if (token) {      
    try {
      const response = await fetch(`${process.env.API_URL}/products?name=${product}&page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json()

      return {
        data
      }
    } catch (error) {
      console.error("Erro ao fazer a chamada à API:", error);
    }
  }
}