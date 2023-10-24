import React from "react";
import { HiOutlinePencil } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface TableProps {
  data: Record<string, any>[];
  compactTable: boolean;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const emptyArray = Array.from({ length: totalPages });

  return (
    <ul className="flex gap-5">
      {emptyArray.map((_, index) => (
        <li
          key={index + 1}
          className={`text-primary ${
            index + 1 === currentPage ? "font-bold" : ""
          }`}
        >
          <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
}

export default function Table({ data, compactTable }: TableProps) {
  return (
    <table className="bg-white text-primary text-left leading-7 inter-font w-full table-fixed rounded-lg">
      <thead>
        <tr>
          <th className="border-b border-primary p-2">ID da venda</th>
          <th className="border-b border-primary p-2">Valor</th>
          <th className="border-b border-primary p-2">Data da venda</th>
          {!compactTable && (
            <th className="w-96 border-b border-primary p-2">Descrição</th>
          )}
          <th className="border-b border-primary p-2">Situação</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: (typeof data)[number], index: number) => (
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
            {!compactTable && (
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
              {!compactTable && (
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
// Isso é como a paginação estava especificamente na tabela de vendas, a lógica de ser ou não paginada deveria estar no componente universal de tabela, e o importador desse componente deve passar uma prop para definir se ele quer ou não que seja paginado

// const totalPages = Math.ceil(fakeData.length / maxRows);

//   <div className="mt-5 flex justify-center">
//   <Pagination
//     currentPage={currentPage}
//     totalPages={totalPages}
//     onPageChange={this.handlePageChange}
//   />
// </div>
