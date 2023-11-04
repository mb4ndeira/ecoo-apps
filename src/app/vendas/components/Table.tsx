"use client";
import { HiOutlineFilter } from "react-icons/hi";

import Table from "@/components/Table";

const fakeData = [
  {
    id: 238992837,
    valor: "R$ 55,70",
    dataVenda: "30/08/2023",
    descricao: "1un alface crespa, 1un rúcula, 1un couve-flor, 1kg batata",
    situacao: "Pendente",
  },
  {
    id: 238923984,
    valor: "R$ 16,40",
    dataVenda: "29/08/2023",
    descricao: "1kg pimentão",
    situacao: "Pendente",
  },
  {
    id: 238492837,
    valor: "R$ 42,30",
    dataVenda: "28/08/2023",
    descricao: "2kg camarão",
    situacao: "Pendente",
  },
  {
    id: 238492398,
    valor: "R$ 42,30",
    dataVenda: "27/08/2023",
    descricao: "3kg salmão",
    situacao: "Concluído",
  },
  {
    id: 238492348,
    valor: "R$ 14,75",
    dataVenda: "27/08/2023",
    descricao: "1kg pêra",
    situacao: "Concluído",
  },
  {
    id: 238092387,
    valor: "R$ 6,50",
    dataVenda: "26/08/2023",
    descricao: "500g uva",
    situacao: "Concluído",
  },
  {
    id: 238423492,
    valor: "R$ 27,90",
    dataVenda: "25/08/2023",
    descricao: "2kg melancia",
    situacao: "Concluído",
  },
  {
    id: 238492807,
    valor: "R$ 9,80",
    dataVenda: "24/08/2023",
    descricao: "500g abacaxi",
    situacao: "Concluído",
  },
  {
    id: 238092837,
    valor: "R$ 9,80",
    dataVenda: "23/08/2023",
    descricao: "500g batata-doce",
    situacao: "Concluído",
  },
  {
    id: 238493743,
    valor: "R$ 5,70",
    dataVenda: "23/08/2023",
    descricao: "1kg batata branca, 1un tempero verde",
    situacao: "Concluído",
  },
  {
    id: 238923974,
    valor: "R$ 16,40",
    dataVenda: "22/08/2023",
    descricao: "1kg pimentão",
    situacao: "Concluído",
  },
  {
    id: 374373849,
    valor: "R$ 10,90",
    dataVenda: "21/08/2023",
    descricao: "1kg cebola",
    situacao: "Concluído",
  },
  {
    id: 238293892,
    valor: "R$ 15,20",
    dataVenda: "21/08/2023",
    descricao: "800g morango",
    situacao: "Concluído",
  },
  {
    id: 983149874,
    valor: "R$ 8,30",
    dataVenda: "20/08/2023",
    descricao: "800g uva",
    situacao: "Concluído",
  },
  {
    id: 878093883,
    valor: "R$ 19,20",
    dataVenda: "19/08/2023",
    descricao: "2kg abobrinha, 1kg berinjela",
    situacao: "Concluído",
  },
  {
    id: 342973473,
    valor: "R$ 12,20",
    dataVenda: "18/08/2023",
    descricao: "500g morango",
    situacao: "Concluído",
  },
  {
    id: 238929874,
    valor: "R$ 45,90",
    dataVenda: "18/08/2023",
    descricao: "1kg alface, 500g rúcula",
    situacao: "Concluído",
  },
  {
    id: 487193736,
    valor: "R$ 7,60",
    dataVenda: "16/08/2023",
    descricao: "1kg maçã",
    situacao: "Concluído",
  },
  {
    id: 1284789372,
    valor: "R$ 25,60",
    dataVenda: "16/08/2023",
    descricao: "3kg maçã, 2kg pera",
    situacao: "Concluído",
  },
  {
    id: 1897247983,
    valor: "R$ 30,45",
    dataVenda: "15/08/2023",
    descricao: "2kg tomate, 1kg batata branca, 1kg cenoura",
    situacao: "Concluído",
  },
  {
    id: 238493892,
    valor: "R$ 15,20",
    dataVenda: "17/08/2023",
    descricao: "800g morango",
    situacao: "Concluído",
  },
  {
    id: 983749874,
    valor: "R$ 8,30",
    dataVenda: "16/08/2023",
    descricao: "800g uva",
    situacao: "Concluído",
  },
  {
    id: 878493883,
    valor: "R$ 19,20",
    dataVenda: "16/08/2023",
    descricao: "2kg abobrinha, 1kg berinjela",
    situacao: "Concluído",
  },
  {
    id: 342873473,
    valor: "R$ 12,20",
    dataVenda: "16/08/2023",
    descricao: "500g morango",
    situacao: "Concluído",
  },
  {
    id: 238429874,
    valor: "R$ 45,90",
    dataVenda: "16/08/2023",
    descricao: "1kg alface, 500g rúcula",
    situacao: "Concluído",
  },
  {
    id: 487393736,
    valor: "R$ 7,60",
    dataVenda: "15/08/2023",
    descricao: "1kg maçã",
    situacao: "Concluído",
  },
];

export default function SalesTable() {
  return (
    <div>
      <div className="relative ml-auto flex items-center">
        <input
          className="border border-primary rounded-md h-12 p-4 pr-10 text-base ml-auto -mb-4 inter-font w-80"
          type="text"
          placeholder="Procurar"
        />
        <div className="absolute right-3 top-3">
          <HiOutlineFilter className="text-primary text-2xl" />
        </div>
      </div>
      <div className="flex flex-row ">
        <span className="text-base font-semibold mb-2 ">Últimas vendas</span>
      </div>
      <div className="flex">
        <Table
          columns={[
            { key: "id", label: "ID da Venda" },
            { key: "valor", label: "Valor" },
            { key: "dataVenda", label: "Data da Venda" },
            { key: "descricao", label: "Descrição" },
            { key: "situacao", label: "Situação" },
          ]}
          data={fakeData}
          compactTable={false}
          paginate={true}
          showHeader={true}
        />
      </div>
    </div>
  );
}
