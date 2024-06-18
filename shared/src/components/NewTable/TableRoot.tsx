import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Table.module.css";

interface TableRootProps extends React.HTMLAttributes<HTMLTableElement> {
  children: (currentItems: any[]) => ReactNode;
  data: any[];
  itemsPerPage: number;
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
  const pageNumbers = [];

  // Always display the first page
  pageNumbers.push(1);

  // Display pages before the current page
  if (currentPage > 3) {
    pageNumbers.push("...");
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Display pages after the current page
  if (currentPage < totalPages - 2) {
    pageNumbers.push("...");
  }

  // Always display the last page
  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <button className="w-4" onClick={() => onPageChange(currentPage - 1)}>
        &lt;
      </button>
      <div className="flex flex-row min-w-[60%] justify-center items-center">
        <ul className="flex flex-row gap-5 justify-self-center self-center">
          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <li
                key={index}
                className={`text-theme-primary ${
                  page === currentPage ? "font-bold" : ""
                }`}
              >
                <button onClick={() => onPageChange(page)}>{page}</button>
              </li>
            ) : (
              <li key={index} className="text-theme-primary">
                {page}
              </li>
            )
          )}
        </ul>
      </div>
      <button className="w-4" onClick={() => onPageChange(currentPage + 1)}>
        &gt;
      </button>
    </div>
  );
}

export default function TableRoot({
  children,
  data,
  paginate,
  itemsPerPage,
  ...rest
}: TableRootProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center w-full h-[inherit] overflow-x-hidden">
      <table
        className={twMerge(
          styles.table,
          "min-w-full font-inter text-center h-[90%] overflow-x-hidden",
          rest.className
        )}
      >
        {children(currentItems)}
      </table>
      {paginate && (
        <div className="h-[2.75rem] flex justify-center items-center w-full overflow-x-auto">
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
