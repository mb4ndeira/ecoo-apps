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
  }) => T | EntityValue | Promise<EntityValue>;
  getOrStub: <
    T extends void | Promise<void> | EntityValue | Promise<EntityValue>
  >(params: {
    real: (...args: any) => any;
    stub: [string, EntityValue | Promise<EntityValue>];
  }) => T | EntityValue | Promise<EntityValue>;
  deleteOrStub: (params: {
    real: (...args: any) => void | Promise<void>;
    stub: [string];
  }) => void | Promise<void>;
};

type Handler<T extends HandlerReturn> = (
  stubbed: boolean,
  operations: Operations,
  fetch: Fetch
) => T;

export class UseCase<T extends HandlerReturn> {
  private handler: Handler<T>;
  private http: HTTPProps | null;
  public stubbed: boolean;
  private stubStore: IStubStore;

  constructor(handler: Handler<T>, stubbed: boolean, stubStore: IStubStore) {
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
        if (response.status === 401) {
          return fetch("/fake-refresh-route").then((refreshResponse) => {
            if (!refreshResponse.ok) throw new Error("Failed to refresh token");

            return fetch(input, init);
          });
        }

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

  public async execute(): Promise<{ data: T; http: HTTPProps | null }> {
    const operations: Operations = {
      setOrStub: async ({ real, stub }) => {
        if (this.stubbed)
          return await this.stubStore.store(stub[0], await stub[1]);

        return await real(real.arguments);
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

    const data = await this.handler(this.stubbed, operations, this.customFetch);

    return {
      data,
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
  [K in keyof T]: UseCase<ReturnType<T[K]>>;
} {
  type UseCases = { [K in keyof T]: UseCase<ReturnType<T[K]>> };
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
