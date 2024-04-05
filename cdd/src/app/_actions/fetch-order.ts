"use server";

import axios from "axios";
import { cookies } from "next/headers";

export interface Order {
  id: string
  payment_method: string
  shipping_address: string
  price: number
  customer: {
    id: string
    first_name: string
    last_name: string
  },
  items: [
    {
      agribusiness: {
        id: string
        name: string
        caf: string
        products: [
          {
            id: string
            name: string
            image: string
            amount: number
          }
        ]
      }
    }
  ]
}

export async function fetchOrder(id: string) {
  const token = cookies().get("token")?.value as string;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(
    `${process.env.API_URL}/orders/${id}`,
    config
  );

  return data.data as Order;
}
