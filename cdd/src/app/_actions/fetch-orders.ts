"use server";

import axios from "axios";
import { cookies } from "next/headers";

export interface Order {
  id: string
  payment_method: string;
  status: string;
  price: number;
}

export async function fetchOrders(cycle_id: string, page = 1) {
  const token = cookies().get("token")?.value as string;

  console.log(token)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = await axios.get(
    `${process.env.API_URL}/orders?cycle_id=${cycle_id}&page=${page}`,
    config
  );

  console.log(data)

  return data.data as Order[];
}
