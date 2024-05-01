import Link from "next/link";
import { IoIosHelp } from "react-icons/io";
import { LuChevronLeft } from "react-icons/lu";

import Table from "./components/Table";
import OldButton from "@shared/components/OldButton";

export default function InformacoesCiclo() {
  const ReturnButton = () => (
    <Link href={"/"} className="flex items-center">
      <LuChevronLeft className="w-[30px] h-[30px] text-default" />
      <OldButton
        className="flex items-center gap-2 text-sm font-medium text-default w-auto"
        title="Voltar"
      />
    </Link>
  );

  return (
    <div className="bg-background w-full h-full flex flex-col items-center p-4">
      <div className="w-full flex flex-col h-[30%] justify-center">
        <span className="text-center text-3xl text-slate-gray font-medium mb-5">
          Informações <br /> do Ciclo
        </span>
        <span className="text-slate-gray text-sm font-medium text-center mb-4">
          No e-COO, cada Centro de <br />
          Distribuição (CDD) tem seu próprio <br />
          ciclo de funcionamento. Confira as <br />
          definições da sua unidade:
        </span>
      </div>
      <div className="w-full h-[55%] overflow-auto mb-14">
        <Table />
      </div>
      <div className="flex items-center justify-end w-full h-[15%] flex-col">
        <div className="w-full">
          <Link href={"/"}>
            <OldButton
              title="Ok, entendi"
              className="w-full bg-default rounded-md h-12 mb-[21px] text-white font-semibold"
            />
          </Link>
        </div>
        <div className="flex justify-between w-full">
          <ReturnButton />
          <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-default" />
        </div>
      </div>
    </div>
  );
}
