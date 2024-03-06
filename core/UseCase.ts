import { AxiosInstance } from "axios";

import { axiosInstance } from "./axios";

import { IStubStore } from "./types/IStubStore";

type HandlerReturn = Record<string, unknown> | Promise<Record<string, unknown>>;

type Operations = {
  setOrStub: <T>(params: {
    real: (...args: any) => any;
    stub: [string, T | Promise<T>];
  }) => Promise<T> | T;
  getOrStub: <T>(params: {
    real: (...args: any) => any;
    stub: [string, T | Promise<T>];
  }) => Promise<T> | T;
  deleteOrStub: (params: {
    real: (...args: any) => void | Promise<void>;
    stub: [string];
  }) => Promise<void> | void;
};

type Handler<
  T,
  U extends HandlerReturn | Record<any, unknown> | Promise<Record<any, unknown>>
> = (
  data: T,
  stubbed: boolean,
  operations: Operations,
  axios: AxiosInstance
) => U;

export class UseCase<T, U extends HandlerReturn> {
  private handler: Handler<T, U>;
  public stubbed: boolean;
  private stubStore: IStubStore;

  constructor(handler: Handler<T, U>, stubbed: boolean, stubStore: IStubStore) {
    this.handler = handler;
    this.stubbed = stubbed || false;
    this.stubStore = stubStore;
  }

  public async execute(data: T): Promise<{ data: U }> {
    const operations: Operations = {
      setOrStub: async ({ real, stub }) => {
        if (this.stubbed)
          return await this.stubStore.store(stub[0], await (stub[1] as any));

        return await real();
      },
      getOrStub: async ({ real, stub }) => {
        if (this.stubbed)
          return await this.stubStore.get(stub[0], await (stub[1] as any));

        return await real();
      },
      deleteOrStub: async ({ real, stub }) => {
        if (this.stubbed) return await this.stubStore.delete(stub[0]);

        return await real();
      },
    };

    const resultData = await this.handler(
      data,
      this.stubbed,
      operations,
      axiosInstance
    );

    return {
      data: resultData,
    };
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
