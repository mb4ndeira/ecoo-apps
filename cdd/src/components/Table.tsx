"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";

interface Column {
  key: string;
  label: string;
  width: string;
}
interface TableRow {
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  data: TableRow[];
  compactTable: boolean;
  paginate: boolean;
  showHeader: boolean;
  pathName: string;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
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
          className={`text-walnut-brown ${
            index + 1 == currentPage ? "font-bold" : ""
          }`}
        >
          <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
}

export default function Table({
  columns,
  data,
  compactTable,
  paginate,
  showHeader,
  pathName,
}: TableProps) {
  const maxRows = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  let dataToDisplay = data;

  if (paginate) {
    const startIndex = (currentPage - 1) * maxRows;
    const endIndex = startIndex + maxRows;
    dataToDisplay = data.slice(startIndex, endIndex);
  } else {
    dataToDisplay = data.slice(0, 8);
  }

  const totalPages = Math.ceil(data.length / maxRows);

  const router = useRouter();

  const handleClick = (id: number) => {
    const n = id.toString();
    const path = `${pathName}${n}`;
    router.push(path);
  };

  return (
    <>
      <table className="bg-white text-theme-primary text-left leading-snug w-full table-fixed rounded-lg font-inter">
        <thead>
          {showHeader && (
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`truncate border-b border-theme-background p-2 text-xs font-semibold text-battleship-gray text-center${
                    column.key === "status" ? "w-40" : ""
                  } ${column.width || ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {dataToDisplay.map((item: TableRow, index: number) => (
            <tr
              key={item.id}
              className={`text-left h-[2.875rem] text-base ${
                index == dataToDisplay.length - 1
                  ? "border-t-0 border-b-0"
                  : "border-b border-theme-background"
              }`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="h-[inherit] w-full"
                  style={{ border: "1px solid red" }}
                >
                  <div className="flex justify-center align-middle w-full h-[inherit]">
                    {column.key == "situacao" ? (
                      !compactTable ? (
                        <>
                          <button
                            className={`${
                              item.situacao.toLowerCase() === "pendente"
                            }`}
                          ></button>
                          {!compactTable && (
                            <button
                              className="ml-2 mr-2 text-xl"
                              onClick={() => handleClick(item.id)}
                            >
                              <HiOutlinePencil />K
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="text-center">
                          <button onClick={() => handleClick(item.id)}>
                            {item.situacao.toLowerCase() === "pendente" ? (
                              <IoEllipsisHorizontalCircleSharp className="text-theme-default text-[22.2px]" />
                            ) : item.situacao.toLowerCase() === "concluída" ? (
                              <FaCircleCheck className="text-rain-forest w-[18px] h-[18px]" />
                            ) : item.situacao.toLowerCase() === "rejeitada" ? (
                              <FaCircleXmark className="text-[#FF7070] w-[18px] h-[18px]" />
                            ) : (
                              <span
                                className={`rounded-3xl px-3 py-2 text-sm h-9 w-20 min-w-[73px] max-w-[93px] font-semibold sm-mobile:-ml-4
                              ${
                                item.situacao.toLowerCase() === "enviar" ||
                                item.situacao.toLowerCase() === "montar"
                                  ? "bg-walnut-brown text-white leading-5 text-sm"
                                  : ""
                              }
                              ${
                                item.situacao.toLowerCase() === "enviada" ||
                                item.situacao.toLowerCase() === "pronta"
                                  ? "bg-theme-secondary text-walnut-brown text-sm"
                                  : ""
                              }
                            `}
                              >
                                {item.situacao}
                              </span>
                            )}
                          </button>
                        </div>
                      )
                    ) : column.key == "descricao" &&
                      item[column.key].length > 20 ? (
                      <span className="" title={item[column.key]}>
                        {item[column.key].substring(0, 20)}...
                      </span>
                    ) : column.key == "nome" ? (
                      <span
                        title={item[column.key]}
                        className="block overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        {item[column.key]}
                      </span>
                    ) : column.key == "id" ? (
                      <div className="text-center">
                        <span title={item[column.key]}>{item[column.key]}</span>
                      </div>
                    ) : (
                      <span className="">{item[column.key]}</span>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginate && (
        <div className="mt-5 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
}
