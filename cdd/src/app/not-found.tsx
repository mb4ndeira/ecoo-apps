import Button from "@shared/components/Button";
import Link from "next/link";
import { GoXCircleFill } from "react-icons/go";

export default function NotFound(){
  return (
    <div className="w-full h-screen flex justify-center bg-theme-background flex-col p-5">
      <div className="w-full h-4/5 flex items-center flex-col justify-center">
        <GoXCircleFill className="w-[100px] h-[100px] text-[#FF7070]" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Ops... < br/> Página não encontrada
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Clique no botão para voltar < br/> ao menu principal.
        </span>
      </div>
      <div className="w-full h-1/5 pb-2 bg-red flex flex-col justify-end gap-4">
        <Link href={"/"}>
          <Button
            className="w-full rounded-lg font-semibold text-white bg-walnut-brown border-2 px-3 py-4"
          >
            Voltar para a tela inicial
          </Button>
        </Link>
      </div>
    </div>
  )
}