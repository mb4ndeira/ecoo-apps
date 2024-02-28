"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { maskCPF } from "@shared/utils";

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import { createAccount } from "@producer/service/account.service";
import { toast } from "sonner";

interface FormProps {
  goBackClick: () => void;
  goNextClick: () => void;
}

export const schema = yup.object({
  first_name: yup.string().required("Informe o primeiro nome"),
  last_name: yup.string().required("Informe o segundo nome"),
  cpf: yup.string().required("Informe o CPF").min(12, "Informe um CAF válido!"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar2({ goBackClick, goNextClick }: FormProps) {
  const resolver = yupResolver<AuthenticationForm>(schema);

  const savedData =
    typeof window !== "undefined" ? localStorage.getItem("formData") : null;
  const initialData = savedData ? JSON.parse(savedData) : {};

  const [formData, setFormData] = useState({
    email: "",
    cellphone: null,
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
    localStorage.setItem("formData", JSON.stringify(data));

    const getLocalStorage = localStorage.getItem("formData");

    if (getLocalStorage) {
      const { email, cellphone, password, first_name, last_name, cpf } =
        JSON.parse(getLocalStorage);

      const account = {
        email: email,
        cellphone: cellphone,
        password: password,
        first_name: first_name,
        last_name: last_name,
        cpf: cpf,
      };

      const result = await createAccount(account);

      const errorMessages = {
        [`"${email}" already exists.`]: "E-mail já cadastrado.",
        [`"${cpf}" already exists.`]: "CPF já cadastrado.",
        [`"${cellphone}" already exists.`]: "Celular já cadastrado.",
        "Invalid CPF format.": "Formato de CPF inválido.",
        "Invalid Cellphone format.": "Formato de celular inválido.",
        "⚠️ Internal server error.": "Erro interno do servidor.",
      };

      const message = result?.data.message;

      if (message) {
        toast.error(errorMessages[message]);
        return;
      } else {
        toast.info("Verifique o seu e-mail.");
        goNextClick();
        return;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    const CPFWithMask = maskCPF(e.target.value);
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
          onChange={handleChange}
          error={errors.first_name?.message}
          register={{ ...register("first_name") }}
          label="Primeiro nome"
          type="text"
        />
        <Input
          onChange={handleChange}
          error={errors.last_name?.message}
          register={{ ...register("last_name") }}
          label="Segundo nome"
          type="text"
        />
        <Input
          onChange={(e) => {
            handleChange(e), handleChangeCPF(e);
          }}
          // onChange={handleChange}
          error={errors.cpf?.message}
          register={{ ...register("cpf") }}
          label="CPF"
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

function ProgressBar2() {
  return (
    <div className="w-full flex justify-center absolute">
      <div className="w-[90%] flex justify-between items-center relative z-0">
        <div className="w-[47px] h-[46px] p-3 text-2xl font-bold border-2 bg-background text-french-gray z-10 border-french-gray rounded-full flex items-center justify-center">
          1
        </div>
        <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center z-10">
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

export { FormCadastrar2, ProgressBar2 };
