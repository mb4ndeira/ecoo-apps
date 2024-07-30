"use client";

import React, { useEffect, useState } from "react";
import { MiniTable } from "@shared/components/MiniTable";
import { FarmDTO } from "@shared/domain/dtos/farm-dto";
import { OrderCompleteDTO } from "@shared/domain/dtos/order-complete-dto";
import ConfirmationModal from "./components/ConfirmationModal";
import RejectModal from "./components/RejectModal";
import Modal from "@cdd/components/Modal";

import HandleOrdersDeliveryButton from "@cdd/components/HandleOrdersDeliveryButton";

interface farmOrders {
  farm: FarmDTO;
  orders: OrderCompleteDTO[];
}

export default function Home({ params }: { params: { id: string } }) {
  const [farmOrders, setFarmOrders] = useState<farmOrders>({
    farm: {
      id: "",
      name: "",
      caf: "",
      active: false,
      admin_id: "",
      tax: 0,
      created_at: new Date(),
      updated_at: null,
    },
    orders: [],
  } as farmOrders);

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

        setFarmOrders(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchListFarmOrders();
  }, [params.id]);

  const groupedOrders = farmOrders.orders.reduce((acc, order) => {
    const productId = order.offer.product.id;
    if (!acc[productId]) {
      acc[productId] = {
        ...order.offer.product,
        totalAmount: 0,
      };
    }
    acc[productId].totalAmount += order.amount;
    return acc;
  }, {} as Record<string, { id: string; name: string; pricing: string; image: string; totalAmount: number }>);

  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col pt-16 items-center h-[10.35rem] w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Verificar oferta
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Lista dos itens que devem ser entregues:
        </span>
      </div>
      <div className="h-[calc(var(--min-page-height)-10.35rem)] w-full flex flex-col justify-between pb-6 gap-4">
        <MiniTable.Root className="overflow-y-hidden">
          <MiniTable.Body className="overflow-y-auto">
            <MiniTable.Row>
              <MiniTable.HeaderCell>Agrofamília:</MiniTable.HeaderCell>
              <MiniTable.Cell className="col-span-2">
                {farmOrders.farm.name}
              </MiniTable.Cell>
            </MiniTable.Row>
            <MiniTable.Row>
              <MiniTable.HeaderCell>CAF:</MiniTable.HeaderCell>
              <MiniTable.Cell className="col-span-2">
                {farmOrders.farm.caf}
              </MiniTable.Cell>
            </MiniTable.Row>

            <MiniTable.Row>
              <MiniTable.HeaderCell>Conteúdo</MiniTable.HeaderCell>
              <MiniTable.Cell className="col-span-2">
                <ul className="flex flex-col gap-1 w-full">
                  {Object.values(groupedOrders).map((product, index) => (
                    <li key={`conteudo-${index}`}>
                      <div className="flex flex-col items-left">
                        <p>
                          {product.totalAmount}
                          {product.pricing == "WEIGHT"
                            ? "kg"
                            : product.pricing == "UNIT"
                            ? "un"
                            : ""}{" "}
                          - {product.name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </MiniTable.Cell>
            </MiniTable.Row>
          </MiniTable.Body>
        </MiniTable.Root>
        <div className="grid grid-cols-2 gap-2 align-end">
          <Modal
            openButton="Rejeitar"
            title="Você tem certeza?"
            description="Após rejeitar a entrega essa operação não poderá ser desfeita. Em caso de erro, entre em contato com o suporte."
            approvalButtons={true}
            textButton1="Cancelar"
            textButton2="Rejeitar"
            bgButton2="#FF7070"
            button2={
              <HandleOrdersDeliveryButton
                cycleId={farmOrders.orders[0]?.offer.cycle_id}
                farmId={farmOrders.farm.id}
                updateStatusTo="REJECTED"
                buttonColor="#FF7070"
                buttonTitle="Rejeitar"
                successUrl={`/ofertas/${params.id}/rejeitar`}
              />
            }
          />
          <Modal
            openButton="Aprovar"
            title="Você tem certeza?"
            description="Após aprovar a entrega essa operação não poderá ser desfeita. Em caso de erro, entre em contato com o suporte."
            approvalButtons={true}
            textButton1="Cancelar"
            textButton2="Aprovar"
            bgButton2="#00735E"
            button2={
              <HandleOrdersDeliveryButton
                cycleId={farmOrders.orders[0]?.offer.cycle_id}
                farmId={farmOrders.farm.id}
                updateStatusTo="APPROVED"
                buttonColor="#00735E"
                buttonTitle="Aprovar"
                successUrl={`/ofertas/${params.id}/aprovar`}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
