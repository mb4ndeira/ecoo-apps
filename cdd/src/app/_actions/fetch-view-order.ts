"use server";

import { ACTIONS } from "@shared/_actions";
import { OrderWithItems } from "@shared/domain/use-cases/view-order";

export const fetchViewOrder = async (
  order_id: string
): Promise<OrderWithItems> => {
  return await ACTIONS["view-order"].execute({
    order_id,
  });
};
