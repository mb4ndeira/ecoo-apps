import { registerUseCases } from "@shared/core/UseCase";
import { inMemoryStubStore } from "@shared/interfaces/inMemoryStubStore";
import { nextCookiesStubStore } from "@shared/next/nextCookiesStubStore";

import { createAccount } from "./create-user";
import { getUser } from "./get-user";
import { login } from "./login";
import { registerAgribusiness } from "./register-agribusiness";

export const USE_CASES = registerUseCases({
  handlers: {
    "create-user": createAccount,
    "get-user": getUser,
    login: login,
    "register-agribusiness": registerAgribusiness,
  },
  stubbedCases: {
    "create-account": false,
    "get-user": true,
    login: false,
    "register-agribusiness": false,
  },
  stubStore:
    process.env.NODE_ENV === "development"
      ? nextCookiesStubStore
      : inMemoryStubStore,
});
