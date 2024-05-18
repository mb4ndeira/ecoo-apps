import * as Sentry from "@sentry/nextjs";

import { UI_WARNINGS } from "@shared/warnings";
import { UseCase, UseCaseHandlerReturn } from "@shared/core/UseCase";

export type ActionHandler<T, U, V extends Record<string, unknown>> = (
  data: T,
  useCases: V
) => U;

export class Action<
  T,
  U,
  V extends Record<string, UseCase<T, UseCaseHandlerReturn<unknown>>>
> {
  private handler;
  private useCases;

  constructor(handler: ActionHandler<T, U, V>, useCases: V) {
    this.handler = handler;
    this.execute = this.execute.bind(this);
    this.useCases = useCases;
  }

  public async execute(data: T) {
    return await this.handler(data, this.useCases);
  }
}

export function registerActions<
  T extends Record<string, (...args: any[]) => any>,
  U extends Record<
    string,
    UseCase<Parameters<T[string]>[0], UseCaseHandlerReturn<unknown>>
  >
>({
  handlers,
  useCases,
}: {
  handlers: T;
  useCases: U;
}): {
  [K in keyof T]: Action<Parameters<T[K]>[0], ReturnType<T[keyof T]>, U>;
} {
  type Actions = {
    [K in keyof T]: Action<Parameters<T[K]>[0], ReturnType<T[keyof T]>, U>;
  };

  const actions: Partial<Actions> = {};

  const useCasesWithTreatment: Record<
    string,
    UseCase<Parameters<T[string]>[0], UseCaseHandlerReturn<unknown>>
  > = {};
  Object.entries(useCases).forEach(([key, useCase]) => {
    const runExecute = async (data: any) => {
      try {
        const result = await useCase.execute(data);

        if (result.type === "exception") throw new Error(result.message);

        return result;
      } catch (err) {
        if (process.env.NODE_ENV !== "development") console.error(err);
        Sentry.captureException(err);

        throw new Error(UI_WARNINGS["shared"]["general"]["generic"]["message"]);
      }
    };

    useCasesWithTreatment[key] = {
      ...useCase,
      execute: runExecute,
    } as UseCase<Parameters<T[string]>[0], UseCaseHandlerReturn<unknown>>;
  });

  for (const key in handlers)
    if (Object.prototype.hasOwnProperty.call(handlers, key))
      actions[key] = new Action(handlers[key], useCasesWithTreatment as U);

  return actions as Actions;
}
