"use client";
import React, { useEffect, useState } from "react";

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
    <div className="p-2 pt-1 text-[#545F71]">
      <div className="border-b h-11 flex items-center">
        ID:{" "}
        <div className="ml-16 overflow-hidden text-ellipsis whitespace-nowrap">
          {entrega.id}
        </div>
      </div>
      <div className="border-b h-11 flex items-center">
        Produtor:{" "}
        <div className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
          {entrega.nome}
        </div>
      </div>
      <div className="border-b h-11 flex items-center">
        Prazo: <div className="ml-9">{entrega.prazo}</div>
      </div>
      <div className=" h-11 flex items-center">Conteúdo:</div>
      <ul>
        {entrega.conteudo.map((item, index) => (
          <li
            key={index}
            className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
