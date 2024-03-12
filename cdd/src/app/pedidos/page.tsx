"use client";

import CyclesFilter from "./components/CyclesFilter";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../_actions/fetch-cycles";
import { Order, fetchOrders } from "../_actions/fetch-orders";
import { Orders } from "./components/Orders";

export default function Home() {
  const [cycles, setcycle] = useState([] as Cycle[]);
  const [selected, setSelected] = useState("");
  const [orders, setOrders] = useState([] as Order[]);

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
      setOrders(await fetchOrders(selected));
    })();
  }, [selected]);

  return (
    <div className="h-screen flex flex-col bg-background px-5 pt-24">
      <div className="flex flex-col h-[10%] justify-end">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Lista de pedidos
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Confirma os pedidos realizados abaixo
        </span>
        <CyclesFilter
          className="mt-4 mb-4"
          cycles={cycles}
          select={setSelected}
        />
        <Orders orders={orders} />
      </div>
    </div>
  );
}
