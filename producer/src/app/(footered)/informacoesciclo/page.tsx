'use client'

import Table from "./components/Table";
import Button from "@shared/components/Button";
import { useRouter } from "next/navigation";

export default function InformacoesCiclo() {
  const router = useRouter()

  const handleBackCick = () => {
    router.push('/')
  }

  return (
    <div className="bg-background w-full h-[90vh] flex flex-col items-center p-4">
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
      <div className="w-full h-[5%]">
        <Button 
          className="w-full bg-default rounded-md h-12 mb-[21px] text-white font-semibold"
          onClick={handleBackCick}
        >
          Ok,entendi
        </Button>
      </div>
    </div>
  );
}
