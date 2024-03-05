'use server'

export const getAccountInformation = async (access_token: string) => {
  try{
    const response = await fetch('http://localhost:3333/me', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      },
    })

    const reply = await response.json()

    return {
      reply
    }
  } catch(error: any){
    console.log(error)
  }
}