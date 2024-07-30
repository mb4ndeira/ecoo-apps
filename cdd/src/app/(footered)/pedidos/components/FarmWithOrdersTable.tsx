"use client";

import { useRouter } from "next/navigation";
import { MdPending } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "@shared/components/Button";
import { Farm, fecthFarmsWithOrders } from "@cdd/app/_actions/fetch-farm-with-orders";
import dayjs from "dayjs"
import SearchFarmWithOrders from "./SearchFarmsWithOrders";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { HiOutlineSearch, HiX } from "react-icons/hi";

interface FarmsProps {
  page: number
}

export function FarmWithOrdersTable({ page }: FarmsProps) {
  const router = useRouter();

  const [farms, setFarms] = useState<Farm[]>([])
  const [selectedStatus, setSelectedStatus] = useState("todos");
  const [name, setName] = useState("")

  const handleStatusFilterClick = (status: string) => {
    setSelectedStatus(status);
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setName(e.target.value)
    }, 300)
  }

  useEffect(() => {
    (async () => {
      const cycle_idString = localStorage.getItem("selected-cycle") as string

      if (!cycle_idString) {
        toast.warning("Selecione um ciclo para começar uma oferta!")
        return
      }

      const { id } = JSON.parse(cycle_idString)

      const farms = await fecthFarmsWithOrders({
        cycle_id: id,
        page,
        name
      })

      console.log({
        farms
      })

      setFarms(farms)
    })()
  }, [page, name])

  const getNextSaturdayDate = () => {
    const today = dayjs()
    const dayOfWeek = dayjs().get('day') + 1

    const daysUntilSaturday = 7 - dayOfWeek
    const nextSaturday = today.add(daysUntilSaturday, 'day')

    return nextSaturday.format("DD/MM/YYYY");
  }

  const handleClick = (id: string) => {
    const n = id.toString();
    const path = `/pedidos/${n}`;

    console.log(path)

    router.push(path);
  };

  const getStatusIcon = (status: string) => {
    if (status === "PENDING") return (
      <Button className="text-xl">
        <MdPending />
      </Button>
    );
    if (status === "Enviado") return (
      <Button className="text-xl text-slate-gray">
        <FaCheckCircle className="text-slate-gray h-4 w-4" />
      </Button>
    );
    if (status === "Cancelado") return (
      <Button className="text-xl text-slate-gray">
        <IoIosCloseCircleOutline />
      </Button>
    );
    return null
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <div className="w-full flex gap-2 items-center mt-4 mb-4">
          <div className="w-full relative">
            <form>
              <input
                onChange={handleChangeSearchInput}
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
      {farms.length === 0 ? (
        <>
          <span className="text-center mt-6 text-slate-gray">Ainda não há pedidos.</span>
        </>
      ) : (
        <table className="bg-white text-theme-primary text-left leading-7 w-full table-fixed rounded-lg mb-4 overflow-y-hidden">
          <thead className="w-full">
            <tr className="text-[rgb(84,95,113)]">
              <th className="truncate w-[30%] text-[#979797] font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
                Prazo
              </th>
              <th className="truncate w-1/2 text-[#979797]  font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
                Produtor
              </th>
              <th className="truncate w-1/5 text-[#979797] font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {farms.map((farm) => (
              <tr onClick={() => handleClick(farm.id)} key={farm.admin_id} className="text-center cursor-pointer">
                <td onClick={getNextSaturdayDate} className="border-b truncate text-[#545F71] border-[#979797] p-2">
                  {getNextSaturdayDate()}
                </td>
                <td className="border-b truncate text-[#545F71] border-[#979797] p-2">
                  {`${farm.name}`}
                </td>
                <td className="border-b truncate text-[#545F71] border-[#979797] p-2">
                  #
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}