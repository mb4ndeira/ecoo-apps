import { registerUseCases } from "@shared/core/UseCase";
import { inMemoryStubStore } from "@shared/interfaces/inMemoryStubStore";
import { nextCookiesStubStore } from "@shared/next/nextCookiesStubStore";

import { createAccount } from "./create-account";

export const USE_CASES = registerUseCases({
  handlers: { "create-account": createAccount },
  stubbedCases: { "create-account": true },
  stubStore:
    process.env.NODE_ENV === "development"
      ? nextCookiesStubStore
      : inMemoryStubStore,
});
