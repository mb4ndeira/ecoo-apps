"use client";

import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import FormLogin from "./components/Form.login";

export default function Login() {
  return (
    <div className="w-full h-screen p-3 pb-6 flex items-center flex-col">
      <div className="flex flex-col h-1/4 w-full items-center justify-end">
        <h1 className="text-3xl font-medium text-slate-gray mb-4">Login</h1>
        <span className="text-sm font-medium text-slate-gray mb-6">
          Entre com seu email e senha:{" "}
        </span>
      </div>
      <div className="w-full h-[55%] flex flex-col justify-center">
        
        <FormLogin />

        <div className="mt-6 flex justify-center">
          <span className="text-sm font-medium text-slate-gray">
            Esqueceu a senha?{" "}
            <span className="inter-font underline">Clique aqui</span>
          </span>
        </div>
      </div>
      <div className="w-full h-1/5 items-end flex text-center">
        <Link
          className="flex items-center gap-2 text-sm font-medium text-default"
          href={"/inicio"}
        >
          <LuChevronLeft className="w-[30px] h-[30px] text-default" /> Voltar
        </Link>
      </div>
    </div>
  );
}
