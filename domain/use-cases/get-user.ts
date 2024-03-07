import { UseCaseHandler } from "@shared/core/UseCase";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ me: { name: string; email: string } }>
> = async ({ access_token }, _stubbed, { getOrStub }, axios) => {
  const me = await getOrStub({
    real: async () => {
      return await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => response.data);
    },
    stub: [
      "me",
      {
        email: "suporte@ecoo.org.br",
        name: "Eduardo Teixeira",
      },
    ],
  });

  console.log(me);

  return { me };
};
