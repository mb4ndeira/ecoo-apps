import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";

export function DeliveriesMenu() {
  return (
    <div className="mt-5 w-full pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="flex justify-between items-start mt-[23px]">
        <span className="text-[#3E5155]">
          Clique no botão abaixo para receber ou rejeitar produtos
        </span>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <div className="">
        <Link href="/cdd/entregas">
          <button className="w-full bg-[#3E5155] rounded-md h-12 mb-[12px] text-white font-bold">
            Verificar entregas
          </button>
        </Link>
      </div>
    </div>
  );
}
