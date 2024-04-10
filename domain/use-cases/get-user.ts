import { UseCaseHandler } from "@shared/core/UseCase";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ me: { name: string; email: string } }>
> = async ({ access_token }, stubbed, { get }, axios) => {
  const me = !stubbed
    ? await axios
        .get(`${process.env.API_URL}/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => response.data)
    : get("me", {
        email: "suporte@ecoo.org.br",
        name: "Eduardo Teixeira",
      });

  return { me };
};
