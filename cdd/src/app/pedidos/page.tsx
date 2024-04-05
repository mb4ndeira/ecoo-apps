"use client";

import CyclesFilter from "./components/CyclesFilter";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../_actions/fetch-cycles";
import { Order, fetchOrders } from "../_actions/fetch-orders";
import { Orders } from "./components/Orders";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

export default function Home() {
  const [cycles, setcycle] = useState([] as Cycle[]);
  const [selected, setSelected] = useState("");
  const [orders, setOrders] = useState([] as Order[]);
  const [page, setPage] = useState<number>(1)

  const backPage = () => {
    if(page > 1){
      setPage(prev => prev - 1)
    }
  }

  const nextPage = () => {
    if(page < 8){
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    (async () => {
      setcycle(await fetchCycles());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selected === "") {
        return;
      }
      setOrders(await fetchOrders(selected, page));
    })();
  }, [selected, page]);

  return (
    <div className="h-screen flex flex-col bg-background p-4">
      <div className="flex flex-col h-[10%] justify-end">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Lista de pedidos
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Confirma os pedidos realizados abaixo
        </span>
      </div>
      <div className="w-full h-[15%]">
        <CyclesFilter
          className="mt-4 mb-2"
          cycles={cycles}
          select={setSelected}
        />
      </div>
      <div className="w-full h-[70%] overflow-auto">
        <Orders nextPage={nextPage} backPage={backPage} page={page} orders={orders} />
      </div>
      <div className="w-full mt-2 h-[5%] flex flex-col justify-end">
        <div className="flex items-center mt-2">
          <Link href={"/"} className="flex items-center gap-2 text-sm font-medium text-default w-auto">
            <LuChevronLeft className="w-[30px] h-[30px] text-default" />
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
