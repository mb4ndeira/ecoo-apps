'use client'

import { AiOutlineMail } from "react-icons/ai";

interface FormProps {
  goNextClick: () => void;
}

export default function FormCadastrar3({ goNextClick }: FormProps) {
  return (
    <div className="w-full h-screen flex justify-center flex-col">
      <div className="w-full h-[90%] flex items-center flex-col justify-center">
        <AiOutlineMail className="w-[100px] h-[100px] text-white bg-rain-forest p-6 rounded-full" />
        <span className="mt-6 text-center text-3xl text-slate-gray font-medium">
          Verifique o <br /> seu email!
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          O seu cadastro como produtor <br /> está quase concluído.
        </span>
        <span className="mt-4 text-center text-slate-gray font-medium text-sm">
          Abra em uma nova guia <br /> o seu email para assim fazer<br /> a confirmação da sua conta.
        </span>
      </div>
      <div className="h-[10%] flex flex-col justify-end mb-3">
        <button onClick={goNextClick} className="flex justify-center inter-font font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-full rounded-md">OK</button>
      </div>
    </div>
  );
}
