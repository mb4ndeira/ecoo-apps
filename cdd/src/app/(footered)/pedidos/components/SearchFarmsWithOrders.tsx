'use client'

import { useState } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";

export default function SearchFarmWithOrders() {
  const [selectedStatus, setSelectedStatus] = useState("todos");

  const handleStatusFilterClick = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div>
      <div className="w-full flex gap-2 items-center mt-4 mb-4">
        <div className="w-full relative">
          <form>
            <input disabled
              className="border border-french-gray rounded-md h-12 p-4 pr-10 text-base inter-font w-full"
              type="text"
            />
            <button disabled>
              <HiOutlineSearch
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                size={24}
              />
            </button>
          </form>
        </div>
        {/* <Button className="w-[15%] text-xl h-12 bg-walnut-brown flex justify-center items-center rounded-lg">
          <MdOutlineFileDownload className="text-white" />
        </Button> */}
      </div>
      <div className="w-full flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => handleStatusFilterClick('Todas')}
          className={`${selectedStatus === 'Todas'
            ? 'bg-[#3E5055] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            : 'bg-[#979797] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            } `}
        >
          Todas
          {selectedStatus === 'Todas' && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleStatusFilterClick('Pendente')}
          className={`${selectedStatus === 'Pendente'
            ? 'bg-[#3E5055] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            : 'bg-[#979797] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            } `}
        >
          pendentes
          {selectedStatus === 'Pendente' && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleStatusFilterClick('Concluída')}
          className={`${selectedStatus === 'Concluída'
            ? 'bg-[#3E5055] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            : 'bg-[#979797] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            } `}
        >
          concluídas
          {selectedStatus === 'Concluída' && <HiX className="ml-1" />}
        </button>
        <button
          onClick={() => handleStatusFilterClick('Rejeitada')}
          className={`${selectedStatus === 'Rejeitada'
            ? 'bg-[#3E5055] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            : 'bg-[#979797] text-sm text-white font-semibold px-2 rounded-[0.25rem] flex items-center h-[22px]'
            } `}
        >
          rejeitadas
          {selectedStatus === 'Rejeitada' && <HiX className="ml-1" />}
        </button>
      </div>
    </div>
  )
}