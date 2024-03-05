import { parseCookies } from "@shared/utils";

import { Entity } from "./Entity";
import { IStubStore } from "./types/IStubStore";

type Fetch = typeof fetch;

type HTTPProps = { cookies: { access_token?: string } | null };

type EntityValue = Entity<unknown> | Entity<unknown>[];

type HandlerReturn =
  | Record<string, EntityValue>
  | Promise<Record<string, EntityValue>>;

type Operations = {
  setOrStub: <
    T extends void | Promise<void> | EntityValue | Promise<EntityValue>
  >(params: {
    real: (...args: any) => any;
    stub: [string, EntityValue | Promise<EntityValue>];
  }) => Promise<T> | Promise<EntityValue>;
  getOrStub: <
    T extends void | Promise<void> | EntityValue | Promise<EntityValue>
  >(params: {
    real: (...args: any) => any;
    stub: [string, EntityValue | Promise<EntityValue>];
  }) => Promise<T> | Promise<EntityValue>;
  deleteOrStub: (params: {
    real: (...args: any) => void | Promise<void>;
    stub: [string];
  }) => Promise<void>;
};

type Handler<T, U extends HandlerReturn> = (
  data: T,
  stubbed: boolean,
  operations: Operations,
  fetch: Fetch
) => U;

export class UseCase<T, U extends HandlerReturn> {
  private handler: Handler<T, U>;
  private http: HTTPProps | null;
  public stubbed: boolean;
  private stubStore: IStubStore;

  constructor(handler: Handler<T, U>, stubbed: boolean, stubStore: IStubStore) {
    this.handler = handler;
    this.http = null;
    this.stubbed = stubbed || false;
    this.stubStore = stubStore;
  }

  private customFetch = (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> => {
    return fetch(input, init)
      .then((response) => {
        const setCookiesHeader = response.headers.get("Set-Cookie");
        this.http = {
          cookies: setCookiesHeader
            ? parseCookies(setCookiesHeader as string)
            : null,
        };

        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  public async execute(data: T): Promise<{ data: U; http: HTTPProps | null }> {
    const operations: Operations = {
      setOrStub: async ({ real, stub }) => {
        if (this.stubbed)
          return await this.stubStore.store(stub[0], await stub[1]);

        return await real();
      },
      getOrStub: async ({ real, stub }) => {
        if (this.stubbed)
          return await this.stubStore.get(stub[0], await stub[1]);

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
      this.customFetch
    );

    return {
      data: resultData,
      http: this.http,
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
