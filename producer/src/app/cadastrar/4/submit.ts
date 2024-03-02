import z from "zod";

import { registerAgribusinessAction } from "../../_actions/register-agribusiness";

export const registerStep4FieldsSchema = {
  agribusiness_name: z.string().min(1, { message: "Campo obrigatório." }),
  caf: z.string().min(1, { message: "Campo obrigatório." }),
};

export const submitRegisterStep4 = async () => {
  // const getLocalStorage = localStorage.getItem("register-form-data");
  // if (getLocalStorage) {
  //   const { email, password } = JSON.parse(getLocalStorage);
  //   const login = {
  //     email: email,
  //     password: password,
  //   };
  //   const loginData = await loginAccount(login);
  //   if (!loginData) {
  //     console.error("Login failed");
  //     return;
  //   }
  //   const { access_token } = loginData?.data;
  //   const { name, caf } = data;
  //   const agribusinesses = {
  //     caf,
  //     name,
  //   };
  // const result = await registerAgribusiness(data);
};
