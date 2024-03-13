import { IStubStore } from "@shared/core/types/IStubStore";

const stubValuesMap = new Map<string, unknown | Map<string, unknown>>();

export const inMemoryStubStore: IStubStore = {
  initialize: () => {},
  store: (key, value) => {
    if (Array.isArray(value)) {
      const map = new Map<string, unknown>();

      value.forEach((item) => {
        if (!item.id) throw new Error("Item does not have an ID property.");

        map.set(item.id.toString(), item);
      });

      stubValuesMap.set(key, map);
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
