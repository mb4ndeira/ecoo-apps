import { cookies } from "next/headers";
import { toast } from "sonner";

import { UI_WARNINGS } from "@shared/warnings";
import { CustomAxios } from "@shared/core/CustomAxios";
import { USE_CASES } from "@shared/domain/use-cases";

const setTokenCookie = (token: string) => {
  cookies().set("token", token);
};

const getTokenCookie = () => {
  return cookies().get("token")?.value || null;
};

const handleTimeout = (error: { response: any }) => {
  if (typeof window !== "undefined") {
    toast(
      UI_WARNINGS["shared"]["general"]["connection-timeout-critical"]["message"]
    );

    return;
  }

  console.error(
    "Request failed to connect (on the server custom Axios): ",
    error
  );
};

export const nextAxios = new CustomAxios(
  setTokenCookie,
  getTokenCookie,
  handleTimeout
).getInstance();
