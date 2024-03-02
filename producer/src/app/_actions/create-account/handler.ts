import { ActionHandler } from "..";

interface CreateAccountData {
  email: string;
  cellphone: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

export const createAccount: ActionHandler<CreateAccountData, void> = async (
  data,
  useCases
) => {
  await useCases["create-account"].execute();
};
