import z from "zod";

import { validateCPF } from "@/utils";

export const registerStep2FieldsSchema = {
  first_name: z.string().min(1, { message: "Campo obrigatório." }).max(255),
  last_name: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  cpf: z
    .string()
    .refine((cpf) => validateCPF(cpf), { message: "CPF inválido." }),
};
