"use client";
import { useEffect, useState } from "react";
import ListOrdersTable from "@cdd/components/ListOrdersTable";
import { Order } from "@shared/domain/use-cases/list-orders";

export default function SendBagTable() {
  const [fetchedOrders, setFetchedOrders] = useState<Order[]>([]);

  // useEffect async function to fetch orders from
  const fetchOrders = async (
    cycle_id: string,
    page: number | "ALL",
    status: string
  ) => {
    try {
      const response = await fetch("/api/fetch-list-orders", {
        method: "POST",
        body: JSON.stringify({ cycle_id, page, status }),
      });
      if (response.ok) {
        const orders = await response.json();
        return orders;
      } else {
        console.error("Failed to fetch orders:", response.statusText);
        return [];
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  };

  useEffect(() => {
    const cycle = localStorage.getItem("selected-cycle");
    const cycleId = cycle ? JSON.parse(cycle).id : "";

    const fetchInitialReadyOrders = async () => {
      const orders = await fetchOrders(cycleId, "ALL", "READY");
      setFetchedOrders([...orders]);
    };

    const fetchInitialDispatchedOrders = async () => {
      const orders = await fetchOrders(cycleId, "ALL", "DISPATCHED");
      setFetchedOrders((prevOrders) => [...prevOrders, ...orders]);
    };

    fetchInitialReadyOrders();
    fetchInitialDispatchedOrders();
  }, []); // Ensure the effect runs only once after mount

  const statusConfig = {
    buttonRoute: "enviar-sacola",
    translation: { DISPATCHED: "Enviada", READY: "Enviar" },
    classNames: {
      DISPATCHED: "bg-theme-secondary",
      READY: "bg-walnut-brown text-white",
    },
  };

  return <ListOrdersTable orders={fetchedOrders} statusConfig={statusConfig} />;
}
