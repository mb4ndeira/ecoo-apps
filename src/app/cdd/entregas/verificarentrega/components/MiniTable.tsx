import React from "react";

interface MiniTableProps {
  entrega: {
    id: number;
    nome: string;
    prazo: string;
    conteudo: string[];
  };
}

const MiniTable: React.FC<MiniTableProps> = ({ entrega }) => {
  return (
    <div className="p-2 pt-1 text-[#545F71]">
      <div className="border-b h-11 flex items-center">
        ID: <div className="ml-16 ">{entrega.id}</div>
      </div>
      <div className="border-b h-11 flex items-center">
        Produtor: <div className="ml-3">{entrega.nome}</div>
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
};

export default MiniTable;
