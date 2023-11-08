import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { number } from "yup";

interface Column {
  key: string;
  label: string;
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

function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
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

export default function Table({
  columns,
  data,
  compactTable,
  paginate,
  showHeader,
  pathName,
}: TableProps) {
  const maxRows = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxNameLength, setMaxNameLength] = useState(100);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 350) {
      setMaxNameLength(3);
    } else if (screenWidth <= 420) {
      setMaxNameLength(5);
    } else if (screenWidth <= 600) {
      setMaxNameLength(8);
    } else if (screenWidth <= 768) {
      setMaxNameLength(15);
    } else if (screenWidth <= 1024) {
      setMaxNameLength(20);
    } else {
      setMaxNameLength(30);
    }
  }, []);

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
    <div>
      <table className="bg-white text-primary text-left leading-7 inter-font w-full table-fixed rounded-lg">
        <colgroup>
          {columns.map((column) => (
            <col
              key={column.key}
              className={`${column.key === "situacao" ? "w-1/4" : "w-1/4"}`}
            />
          ))}
        </colgroup>
        <thead>
          {showHeader && (
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={`border-b border-primary p-2`}>
                  {column.label}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody className="">
          {dataToDisplay.map((item: TableRow, index: number) => (
            <tr
              key={item.id}
              className={`${
                index === dataToDisplay.length - 1
                  ? "border-t-0 border-b-0"
                  : "border-b border-primary"
              }`}
            >
              {columns.map((column) => (
                <td key={column.key} className="p-2 flex-grow">
                  {column.key === "situacao" ? (
                    !compactTable ? (
                      <>
                        <button
                          className={`rounded-3xl ${
                            item.situacao.toLowerCase() === "pendente"
                              ? "bg-primary text-white"
                              : item.situacao.toLowerCase() === "rejeitada"
                              ? "bg-red-400 text-white"
                              : "bg-secondary text-primary"
                          } text-sm h-9 w-20 font-semibold`}
                          onClick={() => handleClick(item.id)}
                        >
                          {item.situacao}
                        </button>
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
                      <button
                        className={`rounded-3xl ${
                          item.situacao.toLowerCase() === "pendente"
                            ? "bg-primary text-white"
                            : item.situacao.toLowerCase() === "rejeitada"
                            ? "bg-red-400 text-white"
                            : "bg-secondary text-primary"
                        } text-sm h-9 w-20 font-semibold sm-mobile:-ml-4`}
                        onClick={() => handleClick(item.id)}
                      >
                        {item.situacao}
                      </button>
                    )
                  ) : column.key === "descricao" &&
                    item[column.key].length > 20 ? (
                    <span title={item[column.key]}>
                      {item[column.key].substring(0, 20)}...
                    </span>
                  ) : column.key === "nome" ? (
                    <span title={item[column.key]}>
                      {truncateString(item[column.key], maxNameLength)}
                    </span>
                  ) : (
                    item[column.key]
                  )}
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
    </div>
  );
}
