import { cookies } from "next/headers";

import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "../..";

import { OrderWithItems } from "@shared/domain/use-cases/view-order";

export interface UpdateOrderStatusFetchData {
  order_id: string;
  status: string;
}

export const updateOrderStatus: ActionHandler<
  UpdateOrderStatusFetchData,
  Promise<{ success: boolean }>
> = async (data, useCases) => {
  const result = await useCases["update-order-status"].execute({
    access_token: cookies().get("token")?.value as string,
    order_id: data.order_id,
    status: data.status,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data;
};
