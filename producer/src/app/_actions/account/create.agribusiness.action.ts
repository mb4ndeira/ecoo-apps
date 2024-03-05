'use server'

interface agribusinesses {
  name: string;
  caf: string;
}

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