"use client";
import z from "zod";
import { LuEye } from "react-icons/lu";

import { maskCellphone, validateCellphone } from "@/utils";

import Input from "../components/Input";

export const registerStep1FieldsSchema = {
  email: z.string().email({ message: "Formato de e-mail inválido." }),
  cellphone: z.string().refine((value) => validateCellphone(value), {
    message: "Formato de telefone inválido.",
  }),
  password: z
    .string()
    .min(8, { message: "Deve conter pelo menos 8 caracteres." }),
};

export default function RegisterStep1() {
  const unparsedFormData = localStorage.getItem("register-form-data");
  const formData = unparsedFormData ? JSON.parse(unparsedFormData) : null;

  return (
    <>
      <Input
        name="email"
        placeholder="suporte@ecoo.org.br"
        label="Email"
        type="email"
        initialValue={formData?.email || null}
        validationSchema={registerStep1FieldsSchema.email}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="cellphone"
        placeholder="(53) 98765-4321"
        label="Celular"
        type="text"
        mask={maskCellphone}
        initialValue={formData?.cellphone || null}
        validationSchema={registerStep1FieldsSchema.cellphone}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="password"
        placeholder="******"
        label="Senha"
        type="password"
        initialValue={formData?.password || null}
        validationSchema={registerStep1FieldsSchema.password}
        icon={<LuEye size={24} />}
        localStorageFormKey="register-form-data"
      />
    </>
  );
}
