"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function getProfile() {
  const token = cookies().get("token")?.value as string;

  if(token){
    try{
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    
      const data = await axios.get(
        `${process.env.API_URL}/me`,
        config
      );
    
      return data.data;
    }catch (error) {
      console.error("Erro ao fazer a chamada à API:", error);
    }
  }

}
