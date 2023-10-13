import { HiOutlineInformationCircle } from "react-icons/hi";
import { PendingDeliveriesTable } from "@/components/producer/Table/PendingDeliveriesTable";

export function PendingDeliveries() {
  return (
    <div className="mt-5 w-full h-72 pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="flex justify-between items-start px-2 mt-[23px]">
        <div className="flex flex-col">
          <span className="font-inter text-[#3E5155]">Entregas pendentes</span>
          <div>
            <span className="text-xs text-[#979797]">
              CDD - FURG ({" "}
              <button className="underline font-bold">ver endereço</button> )
            </span>
          </div>
        </div>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <PendingDeliveriesTable />
    </div>
  );
}
