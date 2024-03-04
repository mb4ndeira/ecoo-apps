"use server";

import { createAccount } from "@producer/app/_actions/account/create.account.action";

// const getLocalStorage = localStorage.getItem("register-form-data");

// if (getLocalStorage) {
//   const { email, cellphone, password, first_name, last_name, cpf } =
//     JSON.parse(getLocalStorage);

//   const account = {
//     email: email,
//     cellphone: cellphone,
//     password: password,
//     first_name: first_name,
//     last_name: last_name,
//     cpf: cpf,
//   };

export async function submitRegisterStep2(data: unknown) {
  await createAccount(data as any);
}
