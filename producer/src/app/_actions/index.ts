import { USE_CASES } from "@shared/domain/use-cases";

import {
  registerActions,
  type ActionHandler as ActionHandlerWithoutCases,
} from "@shared/Action";

import { createAccount } from "./create-account/handler";
import { registerAgribusiness } from "./register-agribusiness/handler";

export type ActionHandler<T, U> = ActionHandlerWithoutCases<
  T,
  U,
  typeof USE_CASES
>;

export const ACTIONS = registerActions({
  handlers: {
    createAccount,
    registerAgribusiness,
  },
  useCases: USE_CASES,
});
