"use client";

import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import FormRecuperarSenha from "../Form.recuperarsenha";

interface FormProps {
  goNextClick: () => void;
}

export default function EsqueciSenhaStep1({ goNextClick }: FormProps) {
  return (
    <>
      <div className="flex flex-col h-2/5 mt-8 w-full items-center justify-end">
        <h1 className="text-3xl font-medium text-slate-gray mb-4">Esqueci a senha</h1>
        <span className="text-sm font-medium text-slate-gray mb-6 text-center">
          Enviaremos um código de <br />
          verificação para o e-mail abaixo
        </span>
      </div>
      <div className="w-full h-[55%] mt-2">
        <FormRecuperarSenha goNextClick={goNextClick} />
      </div>
      <div className="w-full h-3/5 items-end flex text-center">
        <Link
          className="flex items-center gap-2 text-sm font-medium text-default"
          href={"/login"}
        >
          <LuChevronLeft className="w-[30px] h-[30px] text-default" /> Voltar
        </Link>
      </div>
    </>
  );
}