"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiHelpCircle } from "react-icons/bi";
import * as yup from "yup";

import cafMask from "@/utils/caf-mask";
import cpfMask from "@/utils/cpf-mask";
import phoneMask from "@/utils/phone-mask";

import { onSubmitLog } from "@/app/cadastrar/onSubmitLog.cadastrar2";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface FormProps {
  goBackClick: () => void;
  goNextClick: () => void;
}

export const schema = yup.object({
  caf: yup.string().required("Informe o CAF").min(12, "Informe um CAF válido!"),
  cpf: yup.string().required("Informe o CPF").min(14, "Informe um CPF válido!"),
  cell: yup
    .string()
    .required("Informe o celular")
    .min(15, "Informe um numero válido!"),
});

export type AuthenticationForm = yup.InferType<typeof schema>;

function FormCadastrar2({ goBackClick, goNextClick }: FormProps) {
  const resolver = yupResolver<AuthenticationForm>(schema);

  const savedData =
    typeof window !== "undefined" ? localStorage.getItem("formData2") : null;
  const initialData = savedData ? JSON.parse(savedData) : {};

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData2");
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
    localStorage.setItem("formData2", JSON.stringify(data));
    onSubmitLog(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    const CPFWithMask = cpfMask(e.target.value);
    e.target.value = CPFWithMask;
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const PhoneWithMaks = phoneMask(e.target.value);
    e.target.value = PhoneWithMaks;
  };

  const handleChangeCAF = (e: ChangeEvent<HTMLInputElement>) => {
    const CAFWithMask = cafMask(e.target.value);
    e.target.value = CAFWithMask;
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
          onChange={(e) => {
            handleChange(e), handleChangeCAF(e);
          }}
          error={errors.caf?.message}
          register={{ ...register("caf") }}
          label="Registro CAF"
          type="text"
          icon={<BiHelpCircle />}
        />
        <Input
          onChange={(e) => {
            handleChange(e), handleChangeCPF(e);
          }}
          error={errors.cpf?.message}
          register={{ ...register("cpf") }}
          label="CPF"
          type="text"
        />
        <Input
          onChange={(e) => {
            handleChange(e), handleChangePhone(e);
          }}
          error={errors.cell?.message}
          register={{ ...register("cell") }}
          label="Celular"
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
