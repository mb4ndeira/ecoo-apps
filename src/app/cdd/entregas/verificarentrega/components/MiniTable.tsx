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

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

export default function MiniTable({ entrega }: MiniTableProps) {
  const [maxNameLength, setMaxNameLength] = useState(100);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 350) {
      setMaxNameLength(10);
    } else if (screenWidth <= 420) {
      setMaxNameLength(14);
    } else if (screenWidth <= 600) {
      setMaxNameLength(20);
    } else if (screenWidth <= 768) {
      setMaxNameLength(25);
    } else if (screenWidth <= 1024) {
      setMaxNameLength(35);
    } else {
      setMaxNameLength(40);
    }
  }, []);
  return (
    <div className="p-2 pt-1 text-[#545F71]">
      <div className="border-b h-11 flex items-center">
        ID: <div className="ml-16 ">{entrega.id}</div>
      </div>
      <div className="border-b h-11 flex items-center">
        Produtor:{" "}
        <div className="ml-3">
          {truncateString(entrega.nome, maxNameLength)}
        </div>
      </div>
      <div className="border-b h-11 flex items-center">
        Prazo: <div className="ml-9">{entrega.prazo}</div>
      </div>
      <div className=" h-11 flex items-center">Conteúdo:</div>
      <ul>
        {entrega.conteudo.map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
