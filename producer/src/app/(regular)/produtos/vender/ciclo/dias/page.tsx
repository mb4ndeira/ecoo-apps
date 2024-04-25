'use client'

import { GetCycles } from "@producer/app/_actions/products/GetCycles";
import Link from "next/link";
import { useRouter } from "next/navigation";import { useEffect, useState } from "react";
import { LuChevronLeft } from "react-icons/lu";

interface CycleProps {
  cycleData: any;
}

const getDayOfWeek = (dayNumber: number): string => {
  const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const adjustedDayNumber = (dayNumber - 1) % 7;
  return daysOfWeek[adjustedDayNumber];
};

export default function Dias(){
  const [cycles, setCycles] = useState<CycleProps[]>()

  const transformToDaysOfWeek = (days: number[]): string => {
    return days.map((day) => getDayOfWeek(day)).join(", ");
  };

  useEffect(() => {
    (async () => {
      const getCycles = await GetCycles()

      if(getCycles?.reply){
        setCycles(getCycles.reply)
      }
    })()
  }, [])


  return (
    // <button className="w-full justify-between flex py-4 px-3 rounded-2xl bg-white text-slate-gray"
    //   onClick={() => handleClickCycle(cycleData.id)}
    // >
    //   <span className="font-semibold text-xl">{alias}</span>
    //   <span className="font-semibold text-lg">Dias de oferta: </span>
    //   <span className="font-normal mb-2">
    //     {transformToDaysOfWeek(offering)}
    //   </span>
    //   <span className="font-semibold text-lg">Dias de compra: </span>
    //   <span className="font-normal mb-2">
    //     {transformToDaysOfWeek(ordering)}
    //   </span>
    //   <span className="font-semibold text-lg">Dias de entrega: </span>
    //   <span className="font-normal">{transformToDaysOfWeek(dispatching)}</span>
    //   <Link href='/informacoesciclo'><HiOutlineInformationCircle className="text-[24px] text-slate-blue" /></Link>
    // </button>
    <div className="w-full h-screen flex flex-col p-5 bg-background">
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-1/5 flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Informações do <br /> ciclo
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Revise os dias de um determinado ciclo <br />
          antes de prosseguir com a oferta
        </span>
      </div>
      <div className="w-full h-3/5 flex flex-col mt-5">
        <table className="bg-white w-full p-10 rounded-lg text-primary text-">
          <tbody>
            <tr>
              <td className="w-1/4 p-3">Dias de oferta: </td>
              <td className="w-3/4 p-3"></td>
            </tr>
            <tr>
              <td className="w-1/4 p-3">Dias de compra: </td>
              <td className="w-3/4 p-3"></td>
            </tr>
            <tr>
              <td className="w-1/4 p-3 border-primary">Dias de entrega: </td>
              <td className="w-3/4 p-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-2 h-1/5 flex flex-col justify-end">
        <div className="flex items-center mt-2">
          <Link href={"/produtos/vender/ciclo"} className="flex items-center gap-2 text-sm font-medium text-default w-auto">
            <LuChevronLeft className="w-[30px] h-[30px] text-default" />
            Voltar
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}