"use client";
import { LuEye } from "react-icons/lu";

import { maskCellphone } from "@shared/utils";

import Input from "../components/Input";
import { registerStep1FieldsSchema } from "./schema";

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
        placeholder="(xx) xxxxx-xxxx"
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
