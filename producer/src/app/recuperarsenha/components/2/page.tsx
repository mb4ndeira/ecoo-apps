import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { LuChevronLeft } from "react-icons/lu";

interface FormProps {
  goBackClick: () => void;
}

export default function EsqueciSenhaStep2({ goBackClick }: FormProps){
  const onClickButton = () => {
    localStorage.removeItem('forgot-password-step')
  }

  return(
    <>
      <div className="flex flex-col justify-center items-center w-full h-[88%]">
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-rain-forest text-white">
          <AiOutlineMail size={64} />
        </div>
        <span className="mt-6 text-center text-3xl leading-[34px] font-medium text-slate-gray">
          Código de <br /> verificação <br /> enviado
        </span>
        <span className="mt-4 text-center font-medium text-sm text-slate-gray">
          Confira o seu email e a caixa de <br /> spam para redefinir a sua senha.
        </span>
      </div>
      <div className="flex flex-col w-full h-[12%] justify-between">
        <div className="flex">
          <Link href={'/login'} className="w-full">
            <button
              onClick={onClickButton}
              className="flex justify-center w-full py-[10px] border-2 rounded-[6px] text-base leading-[22px] tracking-tight font-semibold bg-slate-gray text-white border-slate-gray"
            >
              Voltar para a tela de login
            </button>
          </Link>
        </div>
        <div className="w-full flex items-end text-center mt-3">
          <button className="flex items-center gap-2 text-sm font-medium text-default" onClick={goBackClick}>
            <LuChevronLeft className="w-[30px] h-[30px] text-default" /> Voltar
          </button>
      </div>
      </div>
    </>
  )
}