interface loginProps {
  email: string;
  password: string;
}

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
