"use client";
import { useEffect, useState } from "react";

import { FarmDTO } from "@shared/domain/dtos/farm-dto";
import { ACTIONS } from "@shared/_actions";

import { fetchFromSearchOfferingFarms } from "@cdd/app/_actions/offers/fetch-from-search-offering-farms";
import OfferingFarmsTable from "./components/OfferingFarmsTable";

export default function Home() {
  const [farmsWithOrders, setFarmsWithOrders] = useState<FarmDTO[]>([]);

  useEffect(() => {
    // get cycle from local storage
    const cycle = localStorage.getItem("selected-cycle");
    const cycleId = cycle ? JSON.parse(cycle).id : "";

    const fetchListFarmsWithOrders = async () => {
      try {
        const response = await fetch("/api/orders/list-farms-with-orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cycle_id: cycleId,
            page: 1,
          }),
        });
        const data = await response.json();
        setFarmsWithOrders(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchListFarmsWithOrders();
  }, []);

  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col justify-end items-center min-h-[8.1rem] pb-0 w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Lista de Ofertas
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Agrofamílias que tiveram pedidos abaixo:
        </span>
      </div>
      <div className="h-[calc(var(--min-page-height)-8.1rem)] w-full">
        <OfferingFarmsTable offeringFarms={farmsWithOrders} />
      </div>
    </div>
  );
}
