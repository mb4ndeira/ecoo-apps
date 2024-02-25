"use client";

import * as yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import cafMask from "@/utils/caf-mask";
import { createAgribusinesses, loginAccount } from "@/service/account.service";
import { useRouter } from "next/navigation";

interface FormProps {
  goBackClick: () => void;
}

export const schema = yup.object({
  name: yup.string().required("Informe o nome do agronegócio"),
  caf: yup.string().required("Informe o CAF"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar4({ goBackClick }: FormProps) {
  const resolver = yupResolver<AuthenticationForm>(schema);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = async (data: AuthenticationForm) => {
    const getLocalStorage = localStorage.getItem("formData");

    if (getLocalStorage) {
      const { email, password } = JSON.parse(getLocalStorage);

      const login = {
        email: email,
        password: password,
      };

      const loginData = await loginAccount(login);

      if (!loginData) {
        console.error("Login failed");
        return;
      }

      if (loginData?.status === 400) {
        alert(loginData.data.message);
        return;
      }

      const { access_token } = loginData?.data;

      const { name, caf } = data;

      const agribusinesses = {
        caf,
        name,
      };

      const result = await createAgribusinesses(agribusinesses, access_token);

      if (result?.status === 409) {
        alert(result.data.message);
        return;
      }
    }

    alert("Agronegócio criado com sucesso!");
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    router.push("/login");
  };

  const handleChangeCAF = (e: ChangeEvent<HTMLInputElement>) => {
    const CPFWithMask = cafMask(e.target.value);
    e.target.value = CPFWithMask;
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
      className="w-full flex-col h-full"
    >
      <div className="space-y-3 flex flex-col h-1/2">
        <Input
          error={errors.name?.message}
          register={{ ...register("name") }}
          label="Nome agronegócio"
          type="text"
        />
        <Input
          onChange={handleChangeCAF}
          error={errors.caf?.message}
          register={{ ...register("caf") }}
          label="CAF"
          type="text"
        />
      </div>
      <div className="w-full flex gap-2 h-1/2 items-end">
        <Button
          onClick={goBackClick}
          className="inter-font font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2"
          type="button"
          title="Voltar"
        />
        <Button
          className="inter-font font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2"
          type="submit"
          title="Avançar"
        />
      </div>
    </form>
  );
}

function ProgressBar4() {
  return (
    <div className="w-full flex justify-center absolute">
      <div className="w-[90%] flex justify-between items-center relative z-0">
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          2
        </div>
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center z-10">
          3
        </div>
        <div className="absolute top-1/2 bg-french-gray h-0.5 w-full"></div>
      </div>
    </div>
  );
}

export { FormCadastrar4, ProgressBar4 };
