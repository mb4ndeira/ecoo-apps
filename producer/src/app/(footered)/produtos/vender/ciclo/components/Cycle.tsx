'use client'
import { useRouter } from "next/navigation";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Listbox } from '@headlessui/react'

interface CycleProps {
  cycleData: any;
}

const getDayOfWeek = (dayNumber: number): string => {
  const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const adjustedDayNumber = (dayNumber - 1) % 7;
  return daysOfWeek[adjustedDayNumber];
};

export function Cycle({ cycleData }: CycleProps) {
  const { id, alias, offering, ordering, dispatching } = cycleData;
  const router = useRouter();

  const transformToDaysOfWeek = (days: number[]): string => {
    return days.map((day) => getDayOfWeek(day)).join(", ");
  };


  const handleClickCycle = (id: string) => {
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
    
    router.push('/produtos/vender');
  };

  return (
    <div className="relative">
      <button onClick={() => handleClickCycle(id)} className="px-3 absolute font-medium w-full py-4 text-left text-slate-gray">
        {alias}
      </button>
      <Listbox>
        <Listbox.Button className="w-full items-center justify-end flex py-4 px-3 rounded-t-lg bg-white text-slate-gray z-10">
          <span className="z-10 text-[22px] text-slate-blue"><HiOutlineInformationCircle /></span>
        </Listbox.Button>
        <Listbox.Options className="w-full justify-between flex flex-col py-4 px-3  bg-white text-slate-gray">
          <span className="font-medium text-base">Dias de oferta: </span>
          <span className="font-normal">
            {transformToDaysOfWeek(offering)}
          </span>
          <div className="w-full h-[1px] bg-slate-gray mt-1 mb-1"></div>
          <span className="font-medium text-base">Dias de compra: </span>
          <span className="font-normal">
            {transformToDaysOfWeek(ordering)}
          </span>
          <div className="w-full h-[1px] bg-slate-gray mt-1 mb-1"></div>
          <span className="font-medium text-base">Dias de entrega: </span>
          <span className="font-normal">{transformToDaysOfWeek(dispatching)}</span>
          <div className="w-full h-[1px] bg-slate-gray mt-1 mb-1"></div>
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

