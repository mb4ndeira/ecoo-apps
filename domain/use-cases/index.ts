import { registerUseCases } from "@shared/core/UseCase";
import { inMemoryStubStore } from "@shared/interfaces/inMemoryStubStore";
import { nextCookiesStubStore } from "@shared/next/nextCookiesStubStore";

import { createAccount } from "./create-account";
import { registerAgribusiness } from "./register-agribusiness";

export const USE_CASES = registerUseCases({
  handlers: {
    "create-account": createAccount,
    "register-agribusiness": registerAgribusiness,
  },
  stubbedCases: { "create-account": true, "register-agribusiness": true },
  stubStore:
    process.env.NODE_ENV === "development"
      ? nextCookiesStubStore
      : inMemoryStubStore,
});
