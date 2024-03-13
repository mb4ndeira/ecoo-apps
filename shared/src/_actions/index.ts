import { USE_CASES } from "@shared/domain/use-cases";

import {
  registerActions,
  type ActionHandler as ActionHandlerWithoutCases,
} from "@shared/next/Action";

import { registerAgribusiness } from "./register-agribusiness/handler";
import { createAccount } from "./account/create-account/handler";
import { getAccount } from "./account/get-account/handler";
import { login } from "./account/login/handler";

export type ActionHandler<T, U> = ActionHandlerWithoutCases<
  T,
  U,
  typeof USE_CASES
>;

export const ACTIONS = registerActions({
  handlers: {
    "create-account": createAccount,
    "get-account": getAccount,
    login: login,
    "register-agribusiness": registerAgribusiness,
  },
  useCases: USE_CASES,
});
