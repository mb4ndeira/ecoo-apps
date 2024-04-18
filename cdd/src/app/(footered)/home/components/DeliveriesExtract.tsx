import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function DeliveriesExtract() {
  return (
    <div className="mt-5 w-full pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="flex justify-between items-start mt-[23px]">
        <span className="text-slate-gray">
          Clique no botão abaixo para ver o extrato de entregas
        </span>
        <button disabled>
          <HiOutlineInformationCircle
            size={24}
            className="ml-4 text-slate-blue"
          />
        </button>
      </div>
      <div className="">
        <Link href="/extrato-entregas">
          <button className="w-full bg-walnut-brown rounded-md h-12 mb-[12px] text-white font-semibold">
            Verificar extratos para entrega
          </button>
        </Link>
      </div>
    </div>
  );
}
