"use server";

import axios from "axios";
import { cookies } from "next/headers";

export interface Order {
  id: string
  payment_method: string
  shipping_adress: string
  status: string
  price: number
  customer: {
    id: string
    first_name: string
    last_name: string
  }
}

export async function fetchOrders(cycle_id: string, page: number) {
  const token = cookies().get("token")?.value as string;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(
    `${process.env.API_URL}/orders?cycle_id=${cycle_id}&page=${page}`,
    config
  );

  return data.data as Order[];
}
