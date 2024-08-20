"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { toast } from "sonner";

export interface FarmOrders {
  id: string;
  name: string;
  caf: string;
  active: boolean;
  admin_id: string;
  tax: number;
  created_at: Date;
  updated_at: Date | null;
  orders: {
    id: string;
    bag_id: string;
    amount: number;
    status: "PENDING" | "SEPARATED" | "DISPATCHED";
    created_at: Date;
    updated_at: Date | null;
    offer: {
      id: string;
      farm_id: string;
      cycle_id: string;
      price: number;
      amount: number;
      description: string | null;
      created_at: Date;
      updated_at: Date | null;
      product: {
        id: string;
        name: string;
        pricing: "UNIT" | "WEIGHT";
        image: string;
        created_at: Date;
        updated_at: Date | null;
      };
    };
  }[];
}

interface FetchFarmOrdersRequest {
  farm_id: string;
  cycle_id: string;
}

export async function fetchFarmOrders({
  farm_id,
  cycle_id,
}: FetchFarmOrdersRequest) {
  const token = cookies().get("token")?.value as string;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(
      `${process.env.API_URL}/orders/${farm_id}?cycle_id=${cycle_id}`,
      config
    );

    return {
      data: response.data as FarmOrders
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiErrorMessage = error.response?.data?.message || 'Erro desconhecido';

      return {
        message: apiErrorMessage
      }
    } else {
      console.error('Erro desconhecido:', error);

      return {
        message: `Erro desconhecido ${error}`
      }
    }
  }
}
