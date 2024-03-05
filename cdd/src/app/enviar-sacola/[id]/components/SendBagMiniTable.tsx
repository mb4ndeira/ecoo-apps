"use client";
import React from "react";

interface SendBagMiniTableProps {
  sacola: {
    id: number;
    situacao: string;
    nome: string;
    prazo: string;
    conteudo: string[];
  };
}

export default function SendBagMiniTable({ sacola }: SendBagMiniTableProps) {
  return (
    <div className="p-2 pt-1 text-[#545F71]">
      <div className="border-b h-11 flex items-center font-inter">
        ID Sacola:
        <div className="ml-5 overflow-hidden text-ellipsis font-inter whitespace-nowrap">
          {sacola.id}
        </div>
      </div>
      <div className="border-b h-11 flex items-center font-inter">
        Status:
        <div className="ml-10 overflow-hidden text-ellipsis font-inter whitespace-nowrap">
          {sacola.situacao === "Enviada" ? "Enviada" : "Não enviada"}
        </div>
      </div>
      <div className="border-b h-11 flex items-center font-inter">
        Cliente:
        <div className="ml-8 overflow-hidden text-ellipsis whitespace-nowrap font-inter">
          {sacola.nome}
        </div>
      </div>
      <div className="border-b h-11 flex items-center font-inter">
        Prazo: <div className="ml-11">{sacola.prazo}</div>
      </div>
      <div className=" h-11 flex items-center font-inter">Conteúdo:</div>
      <ul>
        {sacola.conteudo.map((item, index) => (
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
