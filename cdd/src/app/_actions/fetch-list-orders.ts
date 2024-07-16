"use server";

import { Order } from "@shared/domain/use-cases/list-orders";
import { ACTIONS } from "@shared/_actions";

export const fetchListOrders = async (
  cycle_id: string,
  page: number,
  status: string
): Promise<Order[]> => {
  return await ACTIONS["list-orders"].execute({
    cycle_id: cycle_id,
    page: page,
    status: status,
  });
};

export const fetchListOrdersAllPages = async (
  cycle_id: string,
  status: string
): Promise<Order[]> => {
  let allOrders: Order[] = [];
  let page = 1;
  while (true) {
    const orders: Order[] = await fetchListOrders(cycle_id, page, status);
    if (orders.length === 0) break;
    allOrders = allOrders.concat(orders);
    page++;
  }
  return allOrders;
};
