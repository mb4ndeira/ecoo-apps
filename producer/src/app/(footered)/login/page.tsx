"use client";
import Link from "next/link";

import FormLogin from "./components/Form.login";

export default function Login() {
  return (
    <div className="w-full h-[90vh] p-5 flex items-center flex-col">
      <div className="flex flex-col h-1/5 w-full items-center justify-end">
        <h1 className="text-3xl font-medium text-slate-gray">Login</h1>
        <span className="text-sm font-medium text-slate-gray mt-2">
          Entre com seu email e senha:{" "}
        </span>
      </div>
      <div className="w-full h-[75%] flex flex-col justify-center">
        <FormLogin />

        <div className="mt-6 flex justify-center">
          <span className="text-sm font-medium text-slate-gray">
            Esqueceu a senha?{" "}
            <Link href={'/recuperarsenha'}>Clique aqui</Link><span className="inter-font underline"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
