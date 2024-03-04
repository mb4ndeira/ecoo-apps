'use server'

interface accountProps {
  email: string;
  cellphone: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

export const createAccount = async (account: accountProps) => {
  try {
    // const response = await fetch("http://localhost:3333/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(account),
    // });

    // const data = await response.json();

    // return { status: response.status, data };

    return { status: 201, data: {} as { message: string } };
  } catch (error: any) {
    console.error(error);
  }
};