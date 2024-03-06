import { UseCaseHandler } from "@shared/core/UseCase";

interface LoginData {
  email: string;
  password: string;
}

export const login: UseCaseHandler<
  LoginData,
  Promise<{ token: string }>
> = async (data, stubbed, _operations, axios) => {
  const token = !stubbed
    ? (
        await axios.post(
          `${process.env.API_URL}/auth`,
          { email: data.email, password: data.password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data.token
    : "blabla";

  return { token };
};
