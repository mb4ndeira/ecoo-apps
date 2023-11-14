"use client"

import Input from "@/components/Input"
import { AiFillEye } from "react-icons/ai"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuChevronLeft } from "react-icons/lu";
import Link from "next/link";
import Button from "../../components/Button";
import { onSubmitLog } from "./onSubmit";
import { useState } from "react";

export const schema = yup.object({
  email: yup.string().required("Informe o e-mail").email("Informe um email válido!"),
  password: yup.string().required("Informe a senha").min(6, "Mínimo 6 dígitos!"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

export default function Login() {
  const resolver = yupResolver<AuthenticationForm>(schema);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = async (data: AuthenticationForm) => {
    onSubmitLog(data);
  };

  return (
    <div className="w-full h-screen p-3 pb-6 flex items-center flex-col">
      <div className="flex flex-col w-full items-center">
            <h1 className="text-3xl font-medium text-slate-gray mt-28 mb-4">Login</h1>
            <span className="text-sm font-medium text-slate-gray mb-6">Entre com seu email e senha: </span>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3 flex flex-col">
            <Input type="text" label='Email' register={{...register("email")}} error={errors.email?.message}/>
            <Input type={showPassword ? 'text' : 'password'} label='Senha' icon={<AiFillEye/>} register={{...register("password")}} error={errors.password?.message}/>
          </div>
          <Button type="submit" className="text-white bg-slate-gray mt-6" title="Entrar"/>
        </form>
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-slate-gray">Esqueceu a senha? <Link className="underline" href={""}>Clique aqui</Link></span>
      </div>
      <div className="w-full h-screen items-end flex text-center">
        <Link className="flex items-center gap-2 text-sm font-medium text-slate-gray" href={"/inicio"}><LuChevronLeft className="w-[30px] h-[30px] text-slate-gray" /> Voltar</Link>
      </div>
    </div>
  )
}