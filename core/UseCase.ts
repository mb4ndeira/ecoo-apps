import { IStubStore } from "@shared/interfaces/types/IStubStore";

export class SuccessReturn<U> {
  type: "success";
  code?: number;
  data: U;

  constructor(data: U, code?: number) {
    this.type = "success";
    this.data = data;
    this.code = code;
  }
}

export class ExceptionReturn {
  type: "exception";
  code?: number;
  message: string;
  data: null | undefined;

  constructor(message: string, data?: null | undefined, code?: number) {
    this.type = "exception";
    this.message = message;
    this.data = data || null;
    this.code = code;
  }
}

type HandlerReturn<U> =
  | SuccessReturn<U>
  | ExceptionReturn
  | Promise<SuccessReturn<U> | ExceptionReturn>;

type Handler<T, U> = (
  data: T,
  stubbed: boolean,
  stubStore: IStubStore
) => HandlerReturn<U>;

export class UseCase<T, U> {
  private handler: Handler<T, U>;
  public stubbed: boolean;
  private stubStore: IStubStore;

  constructor(handler: Handler<T, U>, stubbed: boolean, stubStore: IStubStore) {
    this.handler = handler;
    this.stubbed = stubbed || false;
    this.stubStore = stubStore;
  }

  public async execute(data: T) {
    return await this.handler(data, this.stubbed, this.stubStore);
  }
}

export function registerUseCases<
  T extends Record<string, (...args: any) => any>
>({
  handlers,
  stubbedCases,
  stubStore,
}: {
  handlers: T;
  stubbedCases: Record<string, boolean>;
  stubStore: IStubStore;
}): {
  [K in keyof T]: UseCase<Parameters<T[K]>[0], ReturnType<T[K]>>;
} {
  type UseCases = {
    [K in keyof T]: UseCase<Parameters<T[K]>[0], ReturnType<T[K]>>;
  };
  const useCases: Partial<UseCases> = {};

  for (const key in handlers) {
    if (Object.prototype.hasOwnProperty.call(handlers, key))
      useCases[key] = new UseCase(
        handlers[key],
        stubbedCases[key] || false,
        stubStore
      ) as any;
  }

  return useCases as UseCases;
}

export {
  type Handler as UseCaseHandler,
  type HandlerReturn as UseCaseHandlerReturn,
};
