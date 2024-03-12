import React from "react";
import { Cards } from "./components/Cards";

export default async function Home() {
  return (
    <div className="flex flex-col px-[20px] bg-background text-slate-gray">
      <span className="mt-14 text-[30px] leading-[34px] text-center mx-auto font-medium">
        Selecione um ciclo
      </span>
      <span className="mt-4 max-w-[270px] text-sm font-medium text-center mx-auto">
        Selecione o ciclo em que deseja ofertar seus produtos
      </span>
      <Cards />
    </div>
  );
}
