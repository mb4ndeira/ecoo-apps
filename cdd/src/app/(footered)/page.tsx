'use client'

import CardComponent from "./home/components/CardComponent";
import SelectCycle from '@shared/components/SelectCycle'
import { CycleProvider } from "@shared/context";
import { Header } from "./home/components/Header";

export default function Cdd() {
  return (
    <div className="px-4 pb-10 pt-10 h-[var(--min-page-height)]">
      <CycleProvider>
        <Header />
        <div className="">
          <SelectCycle />
          <CardComponent title="Receber ofertas" link="/pedidos" />
          <CardComponent title="Montar sacola" link="/montar-sacola" />
          <CardComponent title="Enviar sacola" link="/enviar-sacola" />
          <CardComponent title="Gerar relatório" link="/extrato-entregas" />
        </div>
      </CycleProvider>
    </div>
  );
}