"use client";
import React from "react";

interface MiniTableProps {
  entrega: {
    id: number;
    nome: string;
    prazo: string;
    conteudo: string[];
  };
}

export default function MiniTable({ entrega }: MiniTableProps) {
  return (
    <div className="p-2 pt-1 bg-white rounded-xl text-primary">
      <div className="border-b h-11 flex items-center font-inter">
        ID:{" "}
        <div className="ml-16 overflow-hidden text-ellipsis font-inter whitespace-nowrap">
          {entrega.id}
        </div>
      </div>
      <div className="border-b h-11 flex items-center font-inter">
        Produtor:{" "}
        <div className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap font-inter">
          {entrega.nome}
        </div>
      </div>
      <div className="border-b h-11 flex items-center font-inter">
        Prazo: <div className="ml-9">{entrega.prazo}</div>
      </div>
      <div className=" h-11 flex items-center font-inter">Conteúdo:</div>
      <ul>
        {entrega.conteudo.map((item, index) => (
          <li
            key={index}
            className="mb-1 overflow-hidden text-ellipsis font-inter whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
