import Link from "next/link";
import Button from "../inicio/components/Button";
import { LuChevronLeft } from "react-icons/lu";

export default function Register(){
  return(
    <div className="w-full h-screen flex items-center flex-col p-3 pb-6">
      <div className="w-full flex items-center flex-col">
          <h1 className="text-3xl text-slate-gray font-medium mt-28 mb-4">Cadastrar</h1>
          <span className="text-sm text-slate-gray font-medium mb-12">Selecione uma opção abaixo: </span>
      </div>
      <div className="flex flex-col w-full space-y-[10px] items-center">
          <Button className="text-white bg-slate-gray" title="Cadastrar como cliente"/>
          <Button className="text-white bg-slate-gray" title="Cadastrar como produtor"/>
      </div>
      <div className="mt-6">
          <span className="font-medium text-sm text-slate-gray">Esta com alguma dúvida? <Link className='border-b' href={""}>Clique aqui</Link></span>
      </div>
      <div className="w-full h-screen items-end flex text-center">
        <Link className="flex items-center gap-2 text-sm font-medium text-slate-gray" href={"/inicio"}><LuChevronLeft className="w-[30px] h-[30px] text-slate-gray" /> Voltar</Link>
      </div>
    </div>
  )
}