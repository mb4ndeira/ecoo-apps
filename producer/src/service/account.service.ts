// import { cookies } from "next/headers";

interface accountProps {
  email: string;
  cellphone: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
}

interface agribusinesses {
  name: string;
  caf: string;
}

interface loginProps {
  email: string;
  password: string;
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

export const createAgribusinesses = async (
  agribusinesses: agribusinesses,
  access_token: string
) => {
  try {
    // const response = await fetch("http://localhost:3333/agribusinesses", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${access_token}`,
    //   },
    //   body: JSON.stringify(agribusinesses),
    // });

    // const data = await response.json();

    // return { status: response.status, data };
    return { status: 201, data: {} as { message: string } };
  } catch (error: any) {
    console.error(error);
  }
};

export const loginAccount = async ({ email, password }: loginProps) => {
  try {
    // const response = await fetch("http://localhost:3333/auth", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const data = await response.json();

    // if (response.status !== 200) {
    //   return { status: response.status, data };
    // }

    // document.cookie = `access_token=${data.access_token};`;

    // return { status: response.status, data };

    document.cookie = `access_token=blabla;`;

    return {
      status: 200,
      data: { access_token: "blabla" } as {
        access_token: string;
        message: string;
      },
    };
  } catch (error) {
    console.error(error);
  }
};
