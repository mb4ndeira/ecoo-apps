"use server";

import axios from "axios";

export interface Offer {
  amount: number
  price: number
  product: {
    id: string
    image: string
    name: string
    pricing: string
  }
}

export async function fetchOffers(cycle_id: string | undefined, page: number = 1, product: string = "") {

  console.log("cycle_id");
  console.log(cycle_id);

  if(!cycle_id) return [];
  
  console.log("get offers")
  console.log(`${process.env.API_URL}/offers?cycle_id=${cycle_id}&product=${product}&page=${page}`);
  const data = await axios.get(
    `${process.env.API_URL}/offers?cycle_id=${cycle_id}&product=${product}&page=${page}`,
  ).catch((error) => {
    console.error("error")
    console.error(error)
  });
  console.log("data")
  console.log(data)

  if(!data?.data){
    return []
  }

  return data.data as Offer[];
}
