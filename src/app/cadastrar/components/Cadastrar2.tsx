'use client'

import { onSubmitLog } from "@/app/cadastrar/utils/onSubmitLog.cadastrar2";
import { validatorInputCadastrar2 } from "@/app/cadastrar/validator/validator.input.cadastrar2";
import Button from "@/app/inicio/components/Button";
import Input from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { BiHelpCircle } from "react-icons/bi";
import * as yup from "yup";

interface FormProps{
  goBackClick: () => void
  goNextClick: () => void
}

export const schema = yup.object({
  caf: yup.string().required("Informe o CAF"),
  cpf: yup.string().required("Informe o CPF"),
  cell: yup.string().required("Informe o celular")
})

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar2({ goBackClick, goNextClick }: FormProps){
  const resolver = yupResolver<AuthenticationForm>(schema);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver })

  const onSubmit = async (data: AuthenticationForm) => {
    const isValid = await validatorInputCadastrar2(data)
    if(isValid){
      onSubmitLog(data);
    }
  };

  const CPFMask = (value: string) => {
    if(!value){
      return ""
    }

    const CPFWithMaks = value.replace(/\D/g, "");

    if (CPFWithMaks.length <= 11) {
      return CPFWithMaks
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    } else {
      return CPFWithMaks
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  }

  const phoneMask = (value: string) => {
    if (!value) {
      return "";
    }
  
    const phoneWithoutMask = value.replace(/\D/g, "");
  
    if (phoneWithoutMask.length <= 11) {
      return phoneWithoutMask
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    } else {
      return phoneWithoutMask
      .slice(0, 11) 
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
    }
  };

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    const CPFWithMask = CPFMask(e.target.value)
    e.target.value = CPFWithMask
  }

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const PhoneWithMaks = phoneMask(e.target.value)
    e.target.value = PhoneWithMaks
  }

  return(
    <form onSubmit={handleSubmit((data) => {goNextClick(), onSubmit(data)})} className="w-full flex-col h-full">
      <div className="space-y-3 flex flex-col h-1/2">
        <Input error={errors.caf?.message} register={{...register("caf")}} label="Registro CAF" type="text" icon={<BiHelpCircle />}/>
        <Input onChange={handleChangeCPF} error={errors.cpf?.message} register={{...register("cpf")}} label="CPF" type="text"/>
        <Input onChange={handleChangePhone} error={errors.cell?.message} register={{...register("cell")}} label="Celular" type="text"/>
      </div>
      <div className="w-full flex gap-2 h-1/2 items-end">
        <Button onClick={goBackClick} className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2" type="button" title="Voltar"/>
        <Button className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2" type="submit" title="Avançar"/>
      </div>
    </form>
  )
}

function ProgressBar2(){
  return(
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
  )
}

export { FormCadastrar2, ProgressBar2 }