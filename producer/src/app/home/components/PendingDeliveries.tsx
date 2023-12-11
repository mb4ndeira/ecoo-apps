import { HiOutlineInformationCircle } from "react-icons/hi";
import { PendingDeliveriesTable } from "./Table/PendingDeliveriesTable";

interface PendingDeliveriesProps {
  numberOfItems: number;
}

export function PendingDeliveries({ numberOfItems }: PendingDeliveriesProps) {
  return (
    <div
      className={`mt-5 w-full pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4`}
    >
      <div className="flex justify-between items-start mt-[23px]">
        <div className="flex flex-col">
          <span className="text-default">Entregas pendentes</span>
          <div>
            <span className="text-xs text-[#979797]">
              CDD - FURG{"   "}
              <button className="font-semibold bg-[#979797] text-white text-[12px] rounded-md h-[18px] w-24">
                ver endereço
              </button>
            </span>
          </div>
        </div>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <PendingDeliveriesTable numberOfItems={numberOfItems} />
    </div>
  );
}
