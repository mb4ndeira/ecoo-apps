import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ me: { name: string; email: string } }>
> = async ({ access_token }, stubbed, { get }) => {
  const me = !stubbed
    ? (await ecooAPIHTTPProvider.getUser(access_token)).data
    : {
        name: "Eduardo Teixeira",
        email: "suporte@ecoo.org.br",
      };

  return { me };
};
