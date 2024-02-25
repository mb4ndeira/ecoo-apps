"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import phoneMask from "@/utils/phone-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import * as yup from "yup";

interface FormProps {
  goNextClick: () => void;
}

export const schema = yup.object({
  email: yup
    .string()
    .required("Informe o email")
    .email("Informe um email válido!"),
  cellphone: yup.string().required("Informe o celular"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(8, "Mínimo 8 dígitos!"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar1({ goNextClick }: FormProps) {
  const resolver = yupResolver<AuthenticationForm>(schema);

  const savedData =
    typeof window !== "undefined" ? localStorage.getItem("formData") : null;
  const initialData = savedData ? JSON.parse(savedData) : {};

  const [formData, setFormData] = useState({
    email: "",
    cellphone: "",
    password: "",
    first_name: "",
    last_name: "",
    cpf: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
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
    const cellphone = data.cellphone.replace(/\D/g, "");

    const formatedDate = {
      ...data,
      cellphone: parseInt(cellphone),
    };

    localStorage.setItem("formData", JSON.stringify(formatedDate));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const PhoneWithMask = phoneMask(e.target.value);
    e.target.value = PhoneWithMask;
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
          className="text-slate-gray"
          onChange={handleChange}
          error={errors.email?.message}
          register={{ ...register("email") }}
          label="Email"
          type="text"
        />
        <Input
          onChange={(e) => {
            handleChangePhone(e), handleChange(e);
          }}
          error={errors.cellphone?.message}
          register={{ ...register("cellphone") }}
          label="Celular"
          type="text"
        />
        <Input
          onChange={handleChange}
          error={errors.password?.message}
          register={{ ...register("password") }}
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
