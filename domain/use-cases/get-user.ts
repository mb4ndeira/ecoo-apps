import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export const getUser: UseCaseHandler<
  { access_token: string },
  { me: { first_name: string; last_name: string; email: string } }
> = async ({ access_token }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn({ 
      me: {
        first_name: "Eduardo",
        last_name: "Teixeira",
        email: "suporte@ecoo.org.br",
      },
    });
  }

  const me = (await ecooAPIHTTPProvider.getUser(access_token)).data;

  return new SuccessReturn({ me });
};
