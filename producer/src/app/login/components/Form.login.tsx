'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { loginAccount } from "@/service/account.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { toast } from "sonner";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail")
    .email("Informe um email válido!"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(8, "Mínimo 8 dígitos!"),
});

export default function FormLogin(){
  const resolver = yupResolver(schema);
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = async (data: any) => {

    const { email, password } = data

    const login = {
      email: email,
      password: password
    }

    const result = await loginAccount(login)

    const errorMessages: { [key: string]: string } = {
      'Credentials are not valid.': 'Credenciais inválidas.',
      'Account is not verified.': 'Conta não verificada.',
      '⚠️ Internal server error.': 'Erro interno do servidor.'
    };
    
    const message = result?.data.message;
        
    if (message && errorMessages.hasOwnProperty(message)) {
      toast.error(errorMessages[message]);
      return;
    } else {
      toast.info("Verifique o seu e-mail.");
      router.push('/');
      return;
    }
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="space-y-3 flex flex-col">
      <Input
        type="text"
        label="Email"
        register={{ ...register("email") }}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        icon={<AiFillEye />}
        register={{ ...register("password") }}
        error={errors.password?.message}
      />
    </div>
    <Button
      type="submit"
      className="text-white bg-slate-gray mt-6"
      title="Entrar"
    />
  </form>
  )
}