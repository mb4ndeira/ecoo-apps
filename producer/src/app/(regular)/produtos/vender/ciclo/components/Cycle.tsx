'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface CycleProps {
  cycleData: any;
}

const getDayOfWeek = (dayNumber: number): string => {
  const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const adjustedDayNumber = (dayNumber - 1) % 7;
  return daysOfWeek[adjustedDayNumber];
};

export function Cycle({ cycleData }: CycleProps) {
  const { alias, offering, ordering, dispatching } = cycleData;
  const router = useRouter()

  const transformToDaysOfWeek = (days: number[]): string => {
    return days.map((day) => getDayOfWeek(day)).join(", ");
  };

  const handleClickCycle = (id: string) => {
    console.log(id)
    const dataOnStorage = JSON.parse(
      localStorage.getItem("offer-products-data") as string
    );

    localStorage.setItem(
      "offer-products-data",
      JSON.stringify({
        ...dataOnStorage,
        cycle_id: id
      })
    );
    
    router.push('/produtos/vender')
  }

  return (
    <button className="w-full items-start flex flex-col py-4 px-3 rounded-2xl bg-white text-slate-gray"
      onClick={() => handleClickCycle(cycleData.id)}
    >
      <span className="font-semibold text-xl mb-2">{alias}</span>
      <span className="font-semibold text-lg">Dias de oferta: </span>
      <span className="font-normal mb-2">
        {transformToDaysOfWeek(offering)}
      </span>
      <span className="font-semibold text-lg">Dias de compra: </span>
      <span className="font-normal mb-2">
        {transformToDaysOfWeek(ordering)}
      </span>
      <span className="font-semibold text-lg">Dias de entrega: </span>
      <span className="font-normal">{transformToDaysOfWeek(dispatching)}</span>
    </button>
  );
}
