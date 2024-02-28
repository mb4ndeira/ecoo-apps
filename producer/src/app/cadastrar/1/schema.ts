import z from "zod";

import { validateCellphone } from "@shared/utils";

export const registerStep1FieldsSchema = {
  email: z.string().email({ message: "Formato de e-mail inválido." }),
  cellphone: z.string().refine((value) => validateCellphone(value), {
    message: "Formato de telefone inválido.",
  }),
  password: z
    .string()
    .min(8, { message: "Deve conter pelo menos 8 caracteres." }),
};
