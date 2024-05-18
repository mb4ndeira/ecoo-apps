import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export const getUser: UseCaseHandler<
  { access_token: string },
  { me: { name: string; email: string } }
> = async ({ access_token }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn({
      me: {
        name: "Eduardo Teixeira",
        email: "suporte@ecoo.org.br",
      },
    });
  }

  const me = (await ecooAPIHTTPProvider.getUser(access_token)).data;

  return new SuccessReturn({ me });
};
