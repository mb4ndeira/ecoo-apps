"use server";

import axios from "axios";


export interface Product {
  id: string
  amount: number
  price: number
  image: string
  name: string
  pricing: string
  description: string,
  created_at: string,
  updated_at: string
}

// "id": "a581beb2-ef92-4a57-b7d4-00f82370010c",
// "name": "Agronegócio do CDD",
// "active": true,
// "offer": {
//     "id": "70f6c3ca-f94d-497c-91d2-4b1fd4c81be5",
//     "products": [
//         {
//             "id": "8cbb1373-134e-4707-b7a1-5d93c6f3fc90",
//             "amount": 11,
//             "price": 10,
//             "name": "Abóbora Cabotiá",
//             "image": "Abóbora Cabotiá",
//             "pricing": "UNIT",
//             "description": null,
//             "created_at": "2024-06-19T18:49:00.233Z",
//             "updated_at": null
export interface Offer {
  id: string
  name: string
  active: boolean
  offer: {
    id: string
    products: Product[]
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
