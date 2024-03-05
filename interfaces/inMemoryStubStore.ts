import { Entity } from "@shared/core/Entity";
import { IStubStore } from "@shared/core/types/IStubStore";

const stubValuesMap = new Map<
  string,
  Entity<unknown> | Map<string, Entity<unknown>>
>();

export const inMemoryStubStore: IStubStore = {
  initialize: () => {},
  store: (key, value) => {
    if (Array.isArray(value)) {
      const entityMap = new Map<string, Entity<unknown>>();
      value.forEach((entity) => {
        if (!entity.id) throw new Error("Entity does not have an ID property.");

        entityMap.set(entity.id.toString(), entity);
      });

      stubValuesMap.set(key, entityMap);
    } else stubValuesMap.set(key, value);

    console.log("Value for key ${key} stored", value);
    return value;
  },
  get: (key, defaultValue) => {
    const value = stubValuesMap.get(key);

    if (!value) {
      console.warn(`Value for key ${key} not found, using default`);
      return defaultValue;
    }

    if (value instanceof Map) return Array.from(value.values());

    console.log("Value for key ${key} retrieved");
    return value;
  },
  delete: (key) => {
    const value = stubValuesMap.get(key);

    if (!value) throw new Error(`Value for key ${key} not found`);

    console.log("Value for key ${key} deleted");
    stubValuesMap.delete(key);
  },
};
