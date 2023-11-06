'use client'

import * as yup from "yup";
import { onSubmitLog } from "./onSubmitLog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input";
import { BiHelpCircle } from "react-icons/bi";
import Link from "next/link";
import Button from "../inicio/components/Button";
import { validatorInputCadastrar2 } from "./validator/validator.input.cadastrar2";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const schema = yup.object({
  caf: yup.string().required("Informe o CAF"),
  cpf: yup.string().required("Informe o CPF"),
  cell: yup.string().required("Informe o celular")
})

export type AuthenticationForm = yup.InferType<typeof schema>;

export default function Cadastrar2(){
  const resolver = yupResolver<AuthenticationForm>(schema);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver })

  const router = useRouter()

  const progress = localStorage.getItem('progress')

  useEffect(() => {
    if (progress !== "1") {
      router.push('/cadastrar-1');
    }
  }, [progress, router]);
  
  const onSubmit = async (data: AuthenticationForm) => {
    const isValid = await validatorInputCadastrar2(data)
    if(isValid){
      localStorage.setItem('progress', '2')
      console.log(data);
      onSubmitLog(data);
      router.push("cadastrar-3")
    }
  };

  return(
    <div className="transition-opacity w-full h-screen flex items-center flex-col p-3 pb-8">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-3xl text-slate-gray font-medium mt-20 mb-4">Crie sua conta</h1>
        <span className="text-sm text-slate-gray font-medium">Preencha seus dados abaixo ou <br /> <Link className="underline" href={"/login"}>entre com uma conta existente</Link></span>
      </div>
      <div className="w-[90%] flex items-center justify-between mt-8">
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-[28%] h-[2px] bg-slate-gray -mx-10 relative"></div>
        <div className="w-[47px] h-[46px] p-3 text-2xl text-white bg-slate-gray font-bold rounded-full flex items-center justify-center">
          2
        </div>
        <div className="w-[28%] h-[2px] bg-gray-400 -mx-10"></div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 text-[#D1D1D6] border-[#D1D1D6] rounded-full flex items-center justify-center">
          3
        </div>
      </div>
      <div className="w-full mt-8 h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-col h-full">
          <div className="space-y-3 flex flex-col h-1/2">
            <Input error={errors.caf?.message} register={{...register("caf")}} label="Registro CAF" type="text" icon={<BiHelpCircle />}/>
            <Input error={errors.cpf?.message} register={{...register("cpf")}} label="CPF" type="text"/>
            <Input error={errors.cell?.message} register={{...register("cell")}} label="Celular" type="password"/>
          </div>
          <div className="w-full flex gap-2 h-1/2 items-end">
            <Link className="w-full" href={"/cadastrar-1"}>
              <Button className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2" type="button" title="Voltar"/>
            </Link>
            <Button className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2" type="submit" title="Avançar"/>
          </div>
        </form>
      </div>
    </div>
  )
}