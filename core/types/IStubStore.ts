type Value = unknown | unknown[];

export interface IStubStore {
  initialize: () => void;
  store: (key: string, value: Value) => Value;
  get(key: string, defaultValue: Value): Value;
  delete: (key: string) => void;
}
