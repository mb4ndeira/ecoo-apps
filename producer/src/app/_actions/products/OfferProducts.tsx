'use server';
import { cookies } from "next/headers";

interface offerProduct{
  cycle_id: string
  product: {
    id: string
    amount: number
    price: number
    description: string
  }
}

export async function OfferProducts({ cycle_id, product }: offerProduct) {
  const token = cookies().get('token')?.value;

  if(token){
    try{
      const response = await fetch(`${process.env.API_URL}/offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cycle_id, product }),
      })

      console.log(product)
  
      const reply = await response.json()
  
      return {
        reply
      }
    }catch(error: any){
      console.log(error)
    }
  }
}