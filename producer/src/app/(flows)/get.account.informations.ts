'use server'

import { cookies } from "next/headers"
import { getAccountInformation } from "../_actions/account/get.account.information.action"

export interface accountInformations{
  first_name: string
  last_name: string 
}

export async function GetAccountInformation(){
  const access_token = cookies().get('access_token')?.value

  if(access_token){
    const response = await getAccountInformation(access_token)

    const { first_name, last_name } = response?.reply.person


    return {
      first_name,
      last_name
    }
  }

  return null
}