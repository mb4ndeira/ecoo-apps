"use client";
import z from "zod";

import { maskCPF, validateCPF } from "@/utils";

import Input from "../components/Input";

export const registerStep2FieldsSchema = {
  first_name: z.string().min(1, { message: "Campo obrigatório." }).max(255),
  last_name: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  cpf: z
    .string()
    .refine((cpf) => validateCPF(cpf), { message: "CPF inválido." }),
};

export default function RegisterStep2() {
  const unparsedFormData = localStorage.getItem("register-form-data");
  const formData = unparsedFormData ? JSON.parse(unparsedFormData) : null;

  return (
    <>
      <Input
        name="first_name"
        placeholder="Eduardo"
        label="Primeiro nome"
        type="text"
        initialValue={formData?.first_name || null}
        validationSchema={registerStep2FieldsSchema.first_name}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="last_name"
        placeholder="Teixeira"
        label="Segundo nome"
        type="text"
        initialValue={formData?.last_name || null}
        validationSchema={registerStep2FieldsSchema.last_name}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="cpf"
        placeholder="987.654.321-10"
        label="CPF"
        type="text"
        mask={maskCPF}
        initialValue={formData?.cpf || null}
        validationSchema={registerStep2FieldsSchema.cpf}
        localStorageFormKey="register-form-data"
      />
    </>
  );
}
