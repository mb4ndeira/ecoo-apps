import React from "react";
import { Cards } from "./components/Cards";
import { LuChevronLeft } from "react-icons/lu";
import Link from "next/link";
import { IoIosHelp } from "react-icons/io";

export default async function Home() {
  return (
    <div className="h-screen flex flex-col bg-theme-background p-4">
      <div className="flex flex-col h-[15%] justify-end">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Selecione um ciclo
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          Selecione o ciclo <br /> em que deseja ofertar seus produtos
        </span>
      </div>
      <div className="w-full h-4/5">
        <Cards />
      </div>
      <div className="flex items-center mt-2 h-[5%] justify-between">
        <div className="flex">
          <LuChevronLeft className="w-[30px] h-[30px] text-theme-default" />
          <Link
            className="flex items-center gap-2 text-sm font-medium text-[${bgColor}] w-auto"
            href={"/"}
          >
            Voltar
          </Link>
        </div>
        <IoIosHelp className="w-[50px] h-[50px] bg-slate-gray rounded-full border-0 text-white" />
      </div>
    </div>
  );
}
