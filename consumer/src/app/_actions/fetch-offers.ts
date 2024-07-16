"use server";

import axios from "axios";


export interface Product {
  id: string
  amount: number
  price: number
  image: string
  name: string
  pricing: "UNIT" | "WEIGHT";
  description: string,
  created_at: string,
  updated_at: string,
}

export interface Offer {
  id: string;
  products: Product[]
}
export interface FarmOffer {
  id: string
  name: string
  active: boolean
  offer: Offer
}


export async function fetchOffers(cycle_id: string | undefined, page: number = 1, product: string = "") {

  if(!cycle_id) return [];
  
  const response = await axios.get(
    `${process.env.API_URL}/offers?cycle_id=${cycle_id}&product=${product}&page=${page}`,
  ).catch((error) => {
    console.error("error")
    console.error(error)
  });

  if(!response?.data){
    return []
  }

  return response.data as FarmOffer[];
}
