"use client";
import Table from "@cdd/components/Table";
import { useState } from "react";
import { HiX } from "react-icons/hi";

const fakeData = [
  {
    id: 123456,
    nome: "João Fonseca",
    situacao: "Pendente",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 234567,
    nome: "Maria Fernandes",
    situacao: "Concluída",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 345678,
    nome: "Carlos Augusto",
    situacao: "Rejeitada",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 456789,
    nome: "Cristiano Ronaldo",
    situacao: "Concluída",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 567890,
    nome: "Sérgio Gouvea",
    situacao: "Concluída",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 678901,
    nome: "Tarsila do Amaral",
    situacao: "Rejeitada",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 789012,
    nome: "Lionel Messi",
    situacao: "Concluída",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 8910123,
    nome: "Sandra de Sá",
    situacao: "Concluída",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
  {
    id: 901234,
    nome: "Tyler Herro",
    situacao: "Rejeitada",
    prazo: "01/01/2023",
    conteudo: [
      "200kg - Cebola Roxa",
      "40kg - Banana nanica",
      "140un - Alface crespa",
      "60kg - Pimentão vermelho",
      "80kg - Cenoura",
      "70un - Couve",
    ],
  },
];

export default function DeliveriesTable() {
  const [selectedStatus, setSelectedStatus] = useState("todos");

  const handleStatusFilterClick = (status: string) => {
    setSelectedStatus((prevStatus) =>
      prevStatus === status ? "todos" : status
    );
  };

  const filteredDeliveries =
    selectedStatus === "todos"
      ? fakeData
      : fakeData.filter((delivery) => delivery.situacao === selectedStatus);

  return (
    <div>
      <div className="flex flex-wrap gap-y-1 gap-x-2 justify-center mb-8">
        <button
          onClick={() => handleStatusFilterClick("Pendente")}
          className={`${
            selectedStatus === "Pendente"
              ? "bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-[#979797] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          pendentes
          {selectedStatus === "Pendente" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleStatusFilterClick("Concluída")}
          className={`${
            selectedStatus === "Concluída"
              ? "bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-battleship-gray text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          concluídas
          {selectedStatus === "Concluída" && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleStatusFilterClick("Rejeitada")}
          className={`${
            selectedStatus === "Rejeitada"
              ? "bg-[#3E5055] text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
              : "bg-battleship-gray text-xs text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]"
          } `}
        >
          rejeitadas
          {selectedStatus === "Rejeitada" && <HiX className="ml-1" />}
        </button>
      </div>

      <Table
        columns={[
          { key: "prazo", label: "Prazo", width: "w-[35%]" },
          { key: "nome", label: "Produtor", width: "w-[45 %]" },
          { key: "situacao", label: "Status", width: "w-[20%]" },
        ]}
        compactTable={true}
        paginate={true}
        data={filteredDeliveries}
        showHeader={true}
        pathName="entregas/"
      />
    </div>
  );
}
