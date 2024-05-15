import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";
import { User, UserProps } from "../entities/user";

export const getUser: UseCaseHandler<
  { access_token: string },
  Promise<{ me: {name: string, email: string} }>
> = async ({ access_token }, stubbed, { get }) => {
  const user = await ecooAPIHTTPProvider.getUser(access_token);
  const userObject = User.create(user.data as UserProps);

  const me = !stubbed
    ? (userObject.me)
    : {
        name: "Eduardo Teixeira",
        email: "suporte@ecoo.org.br",
      };

  return { me };
};
