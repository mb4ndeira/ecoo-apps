import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { isUnderConstruction } from "@shared/next/library/is-under-construction";
import Button from "@shared/components/Button";

export function ProductMenu() {
  return (
    <div className="mt-5 w-full h-fit pl-3 pr-4 rounded-2xl bg-white flex flex-col justify-around gap-4">
      <div className="flex justify-between items-start mt-[23px]">
        <span className="text-default text-[16px] mb-[13px]">
          Ofereça os seus produtos clicando no botão abaixo
        </span>
        <button>
          <HiOutlineInformationCircle className="text-[24px] text-slate-blue" />
        </button>
      </div>
      <div className="">
        <Link href="/produtos/vender/ciclo">
          <Button
            className="w-full bg-default rounded-md h-12 mb-[12px] text-white font-semibold"
            disabled={isUnderConstruction("/produtos/vender/ciclo")}
            href="/produtos/vender/ciclo"
          >
            Colocar a venda
          </Button>
        </Link>
        <Link href={"/produtos/meus"}>
          <Button
            className="w-full bg-transparent rounded-md h-12 mb-[20px] text-[#3E5155] border-2 border-[#3E5155] font-semibold"
            disabled={isUnderConstruction("/produtos/meus")}
            href={"/produtos/meus"}
          >
            Ofertas vigentes
          </Button>
        </Link>
      </div>
    </div>
  );
}
