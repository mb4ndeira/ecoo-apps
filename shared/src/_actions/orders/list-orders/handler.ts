import { cookies } from "next/headers";

import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "../..";

import { Order } from "@shared/domain/use-cases/list-orders";

interface OrderFetchData {
  cycle_id: string;
  page: number;
  status: string;
}

export const listOrders: ActionHandler<
  OrderFetchData,
  Promise<Order[]>
> = async (data, useCases) => {
  const result = await useCases["list-orders"].execute({
    access_token: cookies().get("token")?.value as string,
    cycle_id: data.cycle_id,
    page: data.page,
    status: data.status,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data.orders;
};
