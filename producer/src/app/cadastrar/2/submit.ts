import z from "zod";

import { validateCPF } from "@shared/utils";

import { createAccountAction } from "@producer/app/_actions/create-account";

export const registerStep2FieldsSchema = {
  first_name: z.string().min(1, { message: "Campo obrigatório." }).max(255),
  last_name: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  cpf: z
    .string()
    .refine((cpf) => validateCPF(cpf), { message: "CPF inválido." }),
};

export const submitRegisterStep2 = async () => {
  const getLocalStorage = localStorage.getItem("register-form-data");

  if (!getLocalStorage)
    throw new Error("Register form local storage data not available.");

  const data = JSON.parse(getLocalStorage);

  await createAccountAction(data);
};
