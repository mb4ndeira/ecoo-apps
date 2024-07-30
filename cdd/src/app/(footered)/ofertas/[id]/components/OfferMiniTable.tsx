import { MiniTable } from "@shared/components/MiniTable";
import React from "react";

import { OrderWithItems } from "@shared/domain/use-cases/view-order";

interface BagMiniTableProps {
  order: OrderWithItems;
}

export default function OfferMiniTable({ order }: BagMiniTableProps) {
  const rows = [
    { label: "Pedido:", value: order.id },
    {
      label: "Status:",
      value: order.status === "PENDING" ? "Pendente" : "Pronta",
    },
    {
      label: "Cliente:",
      value: order.customer.first_name + " " + order.customer.last_name,
    },
    {
      label: "Conteúdo:",
      value: (
        <ul className="flex flex-col gap-1 w-full">
          {order.items.agribusiness.map((agribusiness, index) => (
            <li key={`conteudo-${index}`}>
              <div className="flex flex-col items-left">
                <p>{agribusiness.name}:</p>
                <ul className="flex flex-col w-full">
                  {agribusiness.products.map((product, index) => (
                    <li key={`produto-${index}`}>
                      <p className="pl-3">
                        {product.amount} - {product.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <MiniTable.Root>
      <MiniTable.Body>
        {rows.map((row, index) => (
          <MiniTable.Row key={index}>
            <MiniTable.HeaderCell>{row.label}</MiniTable.HeaderCell>
            <MiniTable.Cell className="col-span-2">{row.value}</MiniTable.Cell>
          </MiniTable.Row>
        ))}
      </MiniTable.Body>
    </MiniTable.Root>
  );
}
