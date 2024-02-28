import z from "zod";

export const registerStep4FieldsSchema = {
  agribusiness_name: z.string().min(1, { message: "Campo obrigatório." }),
  caf: z.string().min(1, { message: "Campo obrigatório." }),
};
