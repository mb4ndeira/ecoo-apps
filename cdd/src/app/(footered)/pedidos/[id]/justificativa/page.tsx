'use client'
import Button from "@shared/components/Button";
import Dropdown from "@shared/components/Dropdown";

import RejectModal from "./components/RejectModal";

const justifications = [
  { id: 1, name: "Falta de produtos", unavailable: false },
  { id: 2, name: "Produtos errados", unavailable: false },
  { id: 3, name: "Baixa qualidade", unavailable: false },
  { id: 4, name: "Produtos vencidos", unavailable: false },
  { id: 5, name: "Quantidade errada", unavailable: false },
  { id: 6, name: "Armazenamento incorreto", unavailable: false },
  { id: 7, name: "Pragas / doenças", unavailable: false },
];

export default function Home({ params }: { params: { id: string } }) {
  const entregaSelecionada = ([] as any).find(
    (entrega) => entrega.id === parseInt(params.id)
  );
  return (
    <div className="h-screen flex flex-col bg-background text-slate-gray p-4 md:px-10 lg:px-16 md:pt-16 lg:pt-20 ">
      <div className="flex flex-col h-[15%] justify-end">
        <span className="text-center text-3xl font-medium">
          Selecione uma < br/> justificativa
        </span>
        <span className="mt-3 text-center text-sm font-medium">
          Selecione uma justificativa < br/> para rejeitar a entrega
        </span>
      </div>
      <div className="mt-5 h-3/5 ">
        <label className="font-inter text-sm text-primary">
          Justificativa
          <Dropdown data={justifications} />
        </label>
      </div>
      <div className="h-[16%] flex left-4 right-4 items-end">
        <RejectModal
          openButton={
            <Button
              title={"Rejeitar"}
              className="font-inter bg-[#FF7070] h-[44px] text-white "
            />
          }
          link={`/entregas/${entregaSelecionada?.id}/justificativa/rejeitar`}
        />
      </div>
    </div>
  );
}
