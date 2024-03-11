import { cookies } from "next/headers";

import { IStubStore } from "@shared/core/types/IStubStore";
import { Entity } from "@shared/core/Entity";

export const nextCookiesStubStore: IStubStore = {
  initialize: () => {},
  store: (key, value) => {
    if (Array.isArray(value)) {
      const map = new Map<string, Entity<unknown>>();

      value.forEach((item) => {
        if (!item.id) throw new Error("Item does not have an ID property.");

        map.set(item.id.toString(), item);
      });

      cookies().set(key, JSON.stringify(map));
      return value;
    }

    cookies().set(key, JSON.stringify(value));
    return value;
  },
  get: (key, defaultValue) => {
    const cookie = cookies().get(key)?.value;
    if (!cookie) {
      console.warn(`Value for key ${key} not found, using default`);
      return defaultValue;
    }

    const value = JSON.parse(cookie);

    if (value instanceof Map) return Array.from(value.values());

    return value;
  },
  delete: (key) => {
    const cookie = cookies().get(key)?.value;
    if (!cookie) throw new Error(`Value for key ${key} not found`);

    cookies().delete(key);
  },
};
