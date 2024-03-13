import { ActionHandler } from "..";

interface RegisterAgribusinessData {
  email: string;
  password: string;
  agribusiness_name: string;
  caf: string;
}

export const registerAgribusiness: ActionHandler<
  RegisterAgribusinessData,
  void
> = async (data, useCases) => {
  const { agribusiness } = await (
    await useCases["register-agribusiness"].execute({
      email: data.email,
      password: data.password,
      caf: data.caf,
      name: data.agribusiness_name,
    })
  ).data;

  return agribusiness;
};
