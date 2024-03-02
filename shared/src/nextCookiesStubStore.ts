import { cookies } from "next/headers";

import { IStubStore } from "@shared/core/types/IStubStore";
import { Entity } from "@shared/core/Entity";

export const nextCookiesStubStore: IStubStore = {
  initialize: () => {},
  store: (key, value) => {
    if (Array.isArray(value)) {
      const entityMap = new Map<string, Entity<unknown>>();
      value.forEach((entity) => {
        if (!entity.id) throw new Error("Entity does not have an ID property.");

        entityMap.set(entity.id.toString(), entity);
      });

      cookies().set(key, JSON.stringify(entityMap));
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
