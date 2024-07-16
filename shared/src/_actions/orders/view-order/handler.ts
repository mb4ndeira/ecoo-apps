import { cookies } from "next/headers";

import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "../..";

import { OrderWithItems } from "@shared/domain/use-cases/view-order";


interface ViewOrderFetchData {
  order_id: string;
}

export const viewOrder: ActionHandler<
  ViewOrderFetchData,
  Promise<OrderWithItems>
> = async (data, useCases) => {
  const result = await useCases["view-order"].execute({
    access_token: cookies().get("token")?.value as string,
    order_id: data.order_id,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data.order;
};
