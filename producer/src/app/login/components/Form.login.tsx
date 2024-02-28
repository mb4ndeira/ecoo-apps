"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import * as yup from "yup";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";

import { loginAccount } from "@producer/service/account.service";
import { yupResolver } from "@hookform/resolvers/yup";

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

export default function FormLogin() {
  const resolver = yupResolver(schema);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    const login = {
      email: email,
      password: password,
    };

    const result = await loginAccount(login);

    if (result?.status === 400) {
      alert(result.data.message);
      return;
    }

    alert("Login efetuado com sucesso!");
    router.push("/");
  };

  return (
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
  );
}
