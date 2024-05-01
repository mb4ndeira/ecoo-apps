"use server";

import axios from "axios";
import { cookies } from "next/headers";

export interface Order {
  customer: string,
  price: number,
  payment_method: string,
  status: string,
  items: [
    {
      agribusiness: string,
      products: [
        {
            name: string,
            price: number,
            weight: number
        }
      ]
    }
  ]
}

export async function getOrder(order_id: string) {
  const token = cookies().get("token")?.value as string;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(
    `${process.env.API_URL}/orders/${order_id}}`,
    config
  );

  return data.data as Order;
}
