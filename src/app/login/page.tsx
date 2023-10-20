'use client'

import Input from "@/components/Input"
import { MdMailOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authenticate } from "@/app/api/auth/authenticate";
import { LuChevronLeft } from "react-icons/lu";
import Link from "next/link";
import Button from "../inicio/components/Button";
import { use, useState } from "react";

const schema = yup.object({
  email: yup.string().required("Informe o e-mail").email("Email inválido"),
  password: yup.string().required("Informe a senha").min(6, "Mínimo 6 dígitos"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

interface AuthenticationProps {
  authenticate: ({ email, password }: AuthenticationForm) => void
}

export default function Login() {
  const resolver = yupResolver<AuthenticationForm>(schema);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  async function onSubmit({ email, password }: AuthenticationForm) {
    authenticate({
      email,
      password
    })
  }

  return (
    <div className="w-full h-screen p-3 pb-6 flex items-center flex-col">
      <div className="flex flex-col w-full items-center">
            <h1 className="text-3xl font-medium text-slate-gray mt-28 mb-4">Login</h1>
            <span className="text-sm font-medium text-slate-gray mb-6">Entre com seu email e senha: </span>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
          type="email"
          label='E-mail'
          icon={<MdMailOutline />}
          register={{...register("email")}}
          error={errors.email?.message}
          />

          <Input 
          type={showPassword ? "text" : "password"}
          label='Senha'
          icon={<AiFillEye onClick={handleShowPassword} />}
          register={{...register("password")}}
          error={errors.password?.message}
          />

          <Button type="submit" className="text-white bg-slate-gray" title="Entrar"/>
        </form>


      </div>
      <div className="w-full h-screen items-end flex text-center">
                <div className="flex items-center gap-2">
                    <LuChevronLeft className="w-[30px] h-[30px]" />
                    <Link className="text-sm font-medium text-slate-gray" href={"/inicio"}>Voltar</Link>
                </div>
            </div>
    </div>
  )
}