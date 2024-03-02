"use client";

import { maskCPF } from "@shared/utils";

import Input from "../components/Input";
import { registerStep2FieldsSchema } from "./submit";

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
        placeholder="959.384.144-08"
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
