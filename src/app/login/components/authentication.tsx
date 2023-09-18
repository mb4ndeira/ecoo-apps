'use client'

import Input from "@/components/Input"
import { MdMailOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authenticate } from "@/app/api/auth/authenticate";

const schema = yup.object({
  email: yup.string().required("Informe o e-mail").email("Email inválido"),
  password: yup.string().required("Informe a senha").min(6, "Mínimo 6 dígitos"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

interface AuthenticationProps {
  authenticate: ({ email, password }: AuthenticationForm) => void
}

export default function Authentication() {
  const resolver = yupResolver<AuthenticationForm>(schema);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className='text-2xl leading-10 font-semibold lg:text-3xl'>
        Fazer login
      </span>

      <div className='mt-4'/>

      <Input
        label='E-mail'
        icon={<MdMailOutline />}
        register={{...register("email")}}
        error={errors.email?.message}
      />

      <Input 
        label='Senha'
        icon={<AiFillEye />}
        register={{...register("password")}}
        error={errors.password?.message}
      />

      <button
        className="text-center h-[42px] bg-slate-gray text-ghost-white-100 rounded-md w-full p-2 font-semibold mt-4"
        type="submit"  
      >
        Entrar
      </button>
    </form>
  )
}