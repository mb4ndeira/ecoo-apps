import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ me: { name: string; email: string } }>
> = async ({ access_token }, stubbed, { get }) => {
  const me = !stubbed
    ? (await ecooAPIHTTPProvider.getUser(access_token)).data
    : (get("me", {
        email: "suporte@ecoo.org.br",
        name: "Eduardo Teixeira",
      }) as { name: string; email: string });

  return { me };
};
