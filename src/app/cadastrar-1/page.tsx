'use client'

import Link from "next/link";
import Button from "../inicio/components/Button";
import { AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { onSubmitLog } from "./onSubmit";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { validatorInputCadastrar1 } from "./validator/validator.input.cadastrar1";
import { useEffect, useState } from "react";

export const schema = yup.object({
  nome: yup.string().required("Informe o nome completo"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  senha: yup.string().required("Informe a senha").min(6, "Mínimo 6 dígitos")
})

export type AuthenticationForm = yup.InferType<typeof schema>;

export default function Cadastrar1(){
  const resolver = yupResolver<AuthenticationForm>(schema);

  const savedData = localStorage.getItem('formData');
  const initialData = savedData ? JSON.parse(savedData) : {};

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: ""
  })

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if(savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem('formData')
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver, defaultValues: initialData })

  const router = useRouter()

  const onSubmit = async (data: AuthenticationForm) => {
    const isValid = await validatorInputCadastrar1(data)
    if (isValid) {
      localStorage.setItem('progress', '1')
      localStorage.setItem('formData', JSON.stringify(data));
      console.log(data);
      onSubmitLog(data);
      router.push("/cadastrar-2")
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <div className="w-[28%] h-[2px] bg-gray-400 -mx-10"></div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 text-[#D1D1D6] border-[#D1D1D6] rounded-full flex items-center justify-center">
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
            <Input onChange={handleChange} error={errors.nome?.message} value={formData.nome} register={{...register("nome")}} label="Nome completo" type="text"/>
            <Input onChange={handleChange} error={errors.email?.message} value={formData.email} register={{...register("email")}} label="Email" type="email"/>
            <Input onChange={handleChange} error={errors.senha?.message} value={formData.senha} register={{...register("senha")}} label="Senha" type="password" icon={<AiFillEye />}/>
          </div>
          <div className="w-full flex gap-2 h-1/2 items-end">
            <Link className="w-full" href={"/cadastrar"}>
              <Button className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2" type="button" title="Voltar"/>
            </Link>
              <Button className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2" type="submit" title="Avançar"/> 
          </div>
        </form>
      </div>
    </div>
  )
}