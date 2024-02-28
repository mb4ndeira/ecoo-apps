"use client";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import * as yup from "yup";

interface FormProps {
  goNextClick: () => void;
}

export const schema = yup.object({
  nome: yup.string().required("Informe o nome completo"),
  email: yup
    .string()
    .required("Informe o email")
    .email("Informe um email válido!"),
  senha: yup.string().required("Informe a senha").min(6, "Mínimo 6 dígitos!"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar1({ goNextClick }: FormProps) {
  const resolver = yupResolver<AuthenticationForm>(schema);

  const savedData =
    typeof window !== "undefined" ? localStorage.getItem("formData1") : null;
  const initialData = savedData ? JSON.parse(savedData) : {};

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData1");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, defaultValues: initialData });

  const onSubmit = async (data: AuthenticationForm) => {
    localStorage.setItem("formData1", JSON.stringify(data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        goNextClick(), onSubmit(data);
      })}
      className="w-full flex-col h-full"
    >
      <div className="space-y-3 flex flex-col h-1/2">
        <Input
          onChange={handleChange}
          error={errors.nome?.message}
          value={formData.nome}
          register={{ ...register("nome") }}
          label="Nome completo"
          type="text"
        />
        <Input
          onChange={handleChange}
          error={errors.email?.message}
          value={formData.email}
          register={{ ...register("email") }}
          label="Email"
          type="text"
        />
        <Input
          onChange={handleChange}
          error={errors.senha?.message}
          value={formData.senha}
          register={{ ...register("senha") }}
          label="Senha"
          type="password"
          icon={<AiFillEye />}
        />
      </div>
      <div className="w-full flex gap-2 h-1/2 items-end">
        <Link href={"inicio"} className="w-full">
          <Button
            className="inter-font font-semibold text-slate-gray border-slate-gray border-2 py-[10px]"
            type="button"
            title="Voltar"
          />
        </Link>
        <Button
          className="inter-font font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2"
          type="submit"
          title="Avançar"
        />
      </div>
    </form>
  );
}

function ProgressBar1() {
  return (
    <div className="w-full flex justify-center absolute">
      <div className="w-[90%] flex justify-between items-center relative z-0">
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center z-10">
          1
        </div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center relative">
          2
        </div>
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          3
        </div>
        <div className="absolute top-1/2 bg-french-gray h-0.5 w-full"></div>
      </div>
    </div>
  );
}

export { FormCadastrar1, ProgressBar1 };
