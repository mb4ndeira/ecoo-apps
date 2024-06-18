"use client";
import { MiniTable } from "@shared/components/MiniTable";
import React from "react";

interface BagMiniTableProps {
  sacola: {
    id: number;
    situacao: string;
    nome: string;
    prazo: string;
    conteudo: string[];
  };
}

export default function BagMiniTable({ sacola }: BagMiniTableProps) {
  const rows = [
    { label: "Pedido:", value: sacola.id },
    { label: "Status:", value: sacola.situacao === "Montar" ? "Pendente" : "Concluída" },
    { label: "Cliente:", value: sacola.nome },
    { label: "Prazo:", value: sacola.prazo },
    { label: "Conteúdo:", value: <ul>{sacola.conteudo.map((item, index) => <li key={`conteudo-${index}`}>{item}</li>)}</ul> }
  ];

  return (
    <MiniTable.Root>
      <MiniTable.Body>
        {rows.map((row, index) => (
          <MiniTable.Row key={index}>
            <MiniTable.HeaderCell
            >{row.label}</MiniTable.HeaderCell> 
            <MiniTable.Cell
            className="col-span-2"
            >{row.value}</MiniTable.Cell>
          </MiniTable.Row>
        ))}
      </MiniTable.Body>
    </MiniTable.Root>
  );
}
