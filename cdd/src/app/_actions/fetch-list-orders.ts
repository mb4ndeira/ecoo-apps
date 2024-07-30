"use server";

import { Order } from "@shared/domain/use-cases/list-orders";
import { ACTIONS } from "@shared/_actions";

export const fetchListOrders = async (
  cycle_id: string,
  page: number | "ALL",
  status: string
): Promise<Order[]> => {
  if (page === "ALL") {
    let allOrders: Order[] = [];
    let currentPage = 1;
    while (true) {
      const orders: Order[] = await ACTIONS["list-orders"].execute({
        cycle_id: cycle_id,
        page: currentPage,
        status: status,
      });
      if (orders.length === 0) break;
      allOrders = allOrders.concat(orders);
      currentPage++;
    }
    return allOrders;
  } else {
    return await ACTIONS["list-orders"].execute({
      cycle_id: cycle_id,
      page: page,
      status: status,
    });
  }
};
