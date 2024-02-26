"use server";

import { createAgribusinesses, loginAccount } from "@/service/account.service";

export async function submitRegisterStep4(data: unknown) {
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
  //   const result = await createAgribusinesses(agribusinesses, access_token);
}
