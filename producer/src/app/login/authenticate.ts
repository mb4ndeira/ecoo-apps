"use server";
export async function authenticate({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("Efetuar login");
}
