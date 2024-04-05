"use server";

import axios from "axios";

export interface Cycle {
  id: string;
  alias: string;
  offering: number[];
  ordering: number[];
  dispatching: number[];
  duration: number;
}

export async function fetchCycles() {
  const data = await axios.get(`${process.env.API_URL}/cycles`);

  if(!data.data){
    return []
  }

  console.log(data.data)

  return data.data as Cycle[];
}
