import {
  UseCaseHandler,
  SuccessReturn,
  ExceptionReturn,
} from "@shared/core/UseCase";
import { USE_CASE_EXCEPTIONS } from "@shared/warnings";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

interface LoginData {
  email: string;
  password: string;
}

export const loginCDD: UseCaseHandler<LoginData, { token: string }> = async (
  data,
  stubbed
) => {
  if (!stubbed) {
    const { token } = await ecooAPIHTTPProvider
      .authenticateUser(data)
      .then((response) => response.data);

    if (!token) {
      throw new ExceptionReturn(USE_CASE_EXCEPTIONS["login-2"], null);
    }

    const { role } = await ecooAPIHTTPProvider
      .getUser(token)
      .then((response) => response.data);

    if (role !== "ADMIN") {
      throw new ExceptionReturn(USE_CASE_EXCEPTIONS["login-cdd-1"], null);
    }

    return new SuccessReturn({ token });
  }

  return new SuccessReturn({ token: "blabla" });
};
