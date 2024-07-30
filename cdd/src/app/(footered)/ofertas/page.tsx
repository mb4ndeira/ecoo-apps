"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FarmWithOrdersTable } from "./components/FarmWithOrdersTable";
import { Farm, fecthFarmsWithOrders } from "@cdd/app/_actions/fetch-farm-with-orders";

export default function Home() {
  const [page, setPage] = useState<number>(1);

  const backPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };  

  const nextPage = () => {
    if (page < 11) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full p-5 pb-6 flex items-center flex-col">
      <div className="flex flex-col h-[18%] w-full items-center justify-end mt-4">
        <h1 className="text-3xl font-medium text-slate-gray mb-4 text-center">Lista de ofertas</h1>
        <span className="text-sm font-medium text-slate-gray mb-6 text-center">
          Aprove ou rejeite as ofertas abaixo:
        </span>
      </div>
      <div className="w-full h-[72%] overflow-y-auto">
        <FarmWithOrdersTable page={page} />
      </div>
      <div className="w-full h-[10%] flex justify-center items-end">
        <div className="gap-4 flex">
          <button onClick={backPage}>
            <IoIosArrowBack />
          </button>
            {page}
          <button onClick={nextPage}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
