"use client";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { LuChevronLeft } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { authenticate } from "./authenticate";

export const schema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail")
    .email("Informe um email válido!"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "Mínimo 6 dígitos!"),
});

export default function Login() {
  const resolver = yupResolver(schema);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = async (data: any) => {
    await authenticate(data);
    router.push("/");
  };

  return (
    <div className="w-full h-screen p-3 pb-6 flex items-center flex-col">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-3xl font-medium text-slate-gray mt-28 mb-4">
          Login
        </h1>
        <span className="text-sm font-medium text-slate-gray mb-6">
          Entre com seu email e senha:{" "}
        </span>
      </div>
      <div className="w-full">
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
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-slate-gray">
          Esqueceu a senha?{" "}
          <span className="inter-font underline">Clique aqui</span>
        </span>
      </div>
      <div className="w-full h-screen items-end flex text-center">
        <Link
          className="flex items-center gap-2 text-sm font-medium text-slate-gray"
          href={"/inicio"}
        >
          <LuChevronLeft className="w-[30px] h-[30px] text-slate-gray" /> Voltar
        </Link>
      </div>
    </div>
  );
}
