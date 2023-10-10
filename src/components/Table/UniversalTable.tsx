import React from "react";
import { HiOutlinePencil } from "react-icons/hi";

// Defina o tipo SaleData
interface SaleData {
  id: number;
  valor: string;
  dataVenda: string;
  descricao: string;
  situacao: string;
}

interface UniversalTableProps {
  data: SaleData[];
  compactTable: boolean;
}

function UniversalTable({ data, compactTable }: UniversalTableProps) {
  return (
    <table className="bg-white text-primary text-left leading-7 inter-font w-full table-fixed rounded-lg">
      <thead>
        <tr>
          <th className="border-b border-primary p-2">ID da venda</th>
          <th className="border-b border-primary p-2">Valor</th>
          <th className="border-b border-primary p-2">Data da venda</th>
          {!compactTable && ( // Verifique compactTable antes de renderizar a coluna de descrição
            <th className="w-96 border-b border-primary p-2">Descrição</th>
          )}
          <th className="border-b border-primary p-2">Situação</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: SaleData, index: number) => (
          <tr
            key={item.id}
            className={`${
              index === data.length - 1
                ? "border-t-0 border-b-0"
                : "border-b border-primary"
            }`}
          >
            <td className="p-2">{item.id}</td>
            <td className="p-2">{item.valor}</td>
            <td className="p-2">{item.dataVenda}</td>
            {!compactTable && ( // Verifique compactTable antes de renderizar a coluna de descrição
              <td className="p-2">
                {item.descricao.length > 40
                  ? `${item.descricao.substring(0, 40)}...`
                  : item.descricao}
              </td>
            )}
            <td className="p-2 flex items-center">
              <button
                className={`rounded-3xl ${
                  item.situacao === "Pendente"
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary"
                } text-sm h-9 w-24 font-semibold`}
              >
                {item.situacao}
              </button>
              {!compactTable && ( // Verifique compactTable antes de renderizar o ícone
                <button className="ml-auto mr-2 text-xl">
                  <HiOutlinePencil />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UniversalTable;
