import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

interface LoginData {
  email: string;
  password: string;
}

export const login: UseCaseHandler<
  LoginData,
  Promise<{ token: string }>
> = async (data, stubbed, _operations) => {
  const token = !stubbed
    ? (
        await ecooAPIHTTPProvider
          .authenticateUser(data)
          .then((response) => response.data)
      ).token
    : "blabla";

  return { token };
};
