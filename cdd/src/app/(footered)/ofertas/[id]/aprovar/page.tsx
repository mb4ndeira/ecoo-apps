"use client";

import React, { useEffect, useState } from "react";
import { FarmDTO } from "@shared/domain/dtos/farm-dto";
import { OrderCompleteDTO } from "@shared/domain/dtos/order-complete-dto";

import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

import Button from "@shared/components/Button";

interface farmOrders {
  farm: FarmDTO;
  orders: OrderCompleteDTO[];
}

export default function Home({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const cycle = localStorage.getItem("selected-cycle");
    const cycleId = cycle ? JSON.parse(cycle).id : "";

    const fetchListFarmOrders = async () => {
      try {
        const response = await fetch("/api/orders/list-farm-orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            farm_id: params.id,
            cycle_id: cycleId,
          }),
        });
        const data = await response.json();
        console.log("data", data);
        setData(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchListFarmOrders();
  }, [params.id]);

  return (
    <div className="text-slate-gray flex flex-col bg-theme-background p-5 justify-start h-full">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="h-[90%] flex items-end justify-center">
          <IoCheckmarkCircle className="text-[125px] text-[#00735E]" />
        </div>
        <div className="flex flex-col items-center justify-start h-full pt-4">
          <span className="text-center text-3xl font-medium">
            A oferta foi <br /> aprovada!
          </span>
          <span className="mt-4 text-center text-sm font-medium">
            A oferta <br/><i><small>#{params.id}</small></i><br/> da agrofamília {data?.name} <br />
            foi aprovada.
          </span>
        </div>
        <div className="justify-self-end">
          <Link href={"/"} className="w-full">
            <Button
              className="w-full bg-[#F7F7F7] rounded-md h-12 mb-[12px] text-[#4F4743] border-2 border-[#4F4743] font-semibold"
              href={"/"}
            >
              Voltar para a tela inicial
            </Button>
          </Link>
          <Link href={"/ofertas"} className="w-full">
            <Button
              className="w-full bg-[#4F4743] rounded-md h-12 text-white font-semibold"
              href={"/ofertas"}
            >
              Verificar outra oferta
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
