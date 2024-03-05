'use server'

interface offerProduct{
  id: string
  quantity_or_weight: number
  price: number
}

export const offerProduct = async (data: {products: offerProduct[]}, access_token: string ) => {
  try{
    const response = await fetch("http://localhost:3333/offers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    })

    const reply = await response.json()

    return {
      reply
    }
  }catch(error: any){
    console.log(error)
  }
}