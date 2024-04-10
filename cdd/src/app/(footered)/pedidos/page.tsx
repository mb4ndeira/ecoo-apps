"use client";
import { useEffect, useState } from "react";

import CyclesFilter from "./components/CyclesFilter";
import { Cycle, fetchCycles } from "../../_actions/fetch-cycles";
import { Order, fetchOrders } from "../../_actions/fetch-orders";
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
      setOrders(await fetchOrders(selected, 1));
    })();
  }, [selected]);

  // const orders = [
  //   {
  //     payment_method: "Dinheiro",
  //     status: "Aguardando pagamento",
  //     price: 100,
  //   },
  //   {
  //     payment_method: "Cartão de crédito",
  //     status: "Aguardando pagamento",
  //     price: 200,
  //   },
  //   {
  //     payment_method: "Cartão de débito",
  //     status: "Aguardando pagamento",
  //     price: 300,
  //   },
  //   {
  //     payment_method: "Pix",
  //     status: "Aguardando pagamento",
  //     price: 400,
  //   },
  //   {
  //     payment_method: "Dinheiro",
  //     status: "Aguardando pagamento",
  //     price: 500,
  //   },
  //   {
  //     payment_method: "Cartão de crédito",
  //     status: "Aguardando pagamento",
  //     price: 600,
  //   },
  //   {
  //     payment_method: "Cartão de débito",
  //     status: "Aguardando pagamento",
  //     price: 700,
  //   },
  //   {
  //     payment_method: "Pix",
  //     status: "Aguardando pagamento",
  //     price: 800,
  //   },
  //   {
  //     payment_method: "Dinheiro",
  //     status: "Aguardando pagamento",
  //     price: 900,
  //   },
  //   {
  //     payment_method: "Cartão de crédito",
  //     status: "Aguardando pagamento",
  //     price: 1000,
  //   },
  //   {
  //     payment_method: "Cartão de débito",
  //     status: "Aguardando pagamento",
  //     price: 1100,
  //   },
  //   {
  //     payment_method: "Pix",
  //     status: "Aguardando pagamento",
  //     price: 1200,
  //   },
  // ];

  return (
    <div className="flex flex-col bg-background px-5 pt-16 justify-start">
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
  );
}
