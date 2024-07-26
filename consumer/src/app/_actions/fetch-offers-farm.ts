"use server";

import axios from "axios";


// "id": "0f432ad3-ea70-47e5-ad5f-00b316cf20e5",
// "name": "Farm do CDD",
// "caf": "12345678",
// "active": true,
// "admin_id": "9e834cb9-87fc-4a72-a36e-d18a15820176",
// "tax": 20,
// "created_at": "2024-07-22T12:47:19.254Z",
// "updated_at": null,
// "offers": [
//     {
//         "id": "00db2050-08b7-404a-b15c-7a2d52697f1f",
//         "cycle_id": "abec42ce-e4db-4a17-a426-80f939cbfab1",
//         "farm_id": "0f432ad3-ea70-47e5-ad5f-00b316cf20e5",
//         "price": 10,
//         "amount": 900,
//         "description": null,
//         "created_at": "2024-07-22T12:47:19.254Z",
//         "updated_at": null,
//         "product": {
//             "id": "06576d16-0dae-4dad-9725-4e48dcbed0ba",
//             "name": "Maçã Nacional Gala",
//             "pricing": "WEIGHT",
//             "image": "maca_gala.jpg",
//             "created_at": "2024-07-22T12:47:19.212Z",
//             "updated_at": null
//         }
//     },


export interface Product {
  id: string
  image: string
  name: string
  pricing: "UNIT" | "WEIGHT"
  created_at: string
  updated_at: string
}

export interface Offer {
  id: string
  farm_id: string
  cycle_id: string
  price: number
  amount: number
  product: Product
  description: string
  created_at: string
  updated_at: string
}

export interface FarmOffers {
  id: string
  name: string
  caf: string
  tax: number
  admin_id: string
  active: boolean
  offers: Offer[]
  created_at: string
  updated_at: string
}



export async function fetchOffersFarm(farm_id: string | undefined, cycle_id: string | undefined, page: number = 1, product: string = "") {

  console.log("page")
  console.log(page)

  if (!cycle_id) 
    return null;

  const response = await axios.get(
    `${process.env.API_URL}/offers/${farm_id}?cycle_id=${cycle_id}&product=${product}&page=${page}`,
  ).catch((error) => {
    console.error("error")
    console.error(error)
  });

  console.log("response?.data")
  console.log(response?.data)


  if (!response?.data) {
    return null
  }


  return response.data as FarmOffers | null;
}
