'use client'

import Link from "next/link";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useEffect, useState } from "react";

import { GetCycles } from "@producer/app/_actions/products/GetCycles";
import { isUnderConstruction } from "@shared/next/library/is-under-construction";
import Button from "@shared/components/Button";

export function ProductMenu() {
  const [isOfferingDay, setIsOfferingDay] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const cycles = await GetCycles();

      if (cycles?.reply) {
        const diaAtual = new Date().getDay() + 1;
        const { offering } = cycles.reply[0];

        if (Array.isArray(offering) && offering.includes(diaAtual)) {
          setIsOfferingDay(true);
        }
      }
    })();
  }, []);

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
            disabled={!isOfferingDay || isUnderConstruction("/produtos/vender/ciclo")}
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
