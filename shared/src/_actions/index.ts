import { USE_CASES } from "@shared/domain/use-cases";

import {
  registerActions,
  type ActionHandler as ActionHandlerWithoutCases,
} from "@shared/next/Action";

import { registerAgribusiness } from "./register-agribusiness/handler";
import { createAccount } from "./account/create-account/handler";
import { getAccount } from "./account/get-account/handler";
import { loginAgribusiness } from "./account/login-agribusiness/handler";
import { loginCDD } from "./account/login-cdd/handler";
import { getCycles } from "./cycles/handler";

export type ActionHandler<T, U> = ActionHandlerWithoutCases<
  T,
  U,
  typeof USE_CASES
>;

export const ACTIONS = registerActions({
  handlers: {
    "create-account": createAccount,
    "get-account": getAccount,
    "get-cycles": getCycles,
    "login-agribusiness": loginAgribusiness,
    "login-cdd": loginCDD,
    "register-agribusiness": registerAgribusiness,
  },
  useCases: USE_CASES,
});
