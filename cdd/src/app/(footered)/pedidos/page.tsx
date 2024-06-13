"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { OrdersTable } from "./components/OrdersTable";
import { Order, fetchOrders } from "@cdd/app/_actions/fetch-orders";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SearchOrder from "./components/SearchOrder";

export default function Home() {
  const [orders, setOrders] = useState<Order[] | []>()
  const [page, setPage] = useState<number>(1);

  const backPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page < 11) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    (async () => {
      const cycle_idString = localStorage.getItem("selected-cycle") as string

      if(!cycle_idString){
        toast.warning("Selecione um ciclo para começar uma oferta!")
        return
      }

      const { id } = JSON.parse(cycle_idString)

      const orders = await fetchOrders({
        cycle_id: id,
        page: page,
        status: "PENDING"
      })

      setOrders(orders)
    })()
  }, [page])
  

  return (
    <div className="w-full h-full p-5 pb-6 flex items-center flex-col">
      <div className="flex flex-col h-[18%] w-full items-center justify-end mt-4">
        <h1 className="text-3xl font-medium text-slate-gray mb-4 text-center">Lista de ofertas</h1>
        <span className="text-sm font-medium text-slate-gray mb-6 text-center">
          Aprove ou rejeite as ofertas abaixo:
        </span>
      </div>
      <div className="w-full h-[22%] flex items-end">
        <SearchOrder />
      </div>
      <div className="w-full h-1/2 overflow-y-auto">
        <OrdersTable orders={orders || []} />
      </div>
      <div className="w-full h-[10%] flex justify-center items-end">
        <div className="gap-4 flex">
          <button onClick={backPage}>
            <IoIosArrowBack />
          </button>
            {page}
          <button onClick={nextPage}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
