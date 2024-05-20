import { toast } from "sonner";

type CallServer<T, U> = {
  before: (handler: () => void) => Omit<CallServer<T, U>, "before">;
  after: (handler: (result: U) => void) => Omit<CallServer<T, U>, "after">;
  run: (data: T) => Promise<U | null>;
};

export const callServer = <T, U>(action: (data: T) => U): CallServer<T, U> => {
  let beforeHandler: () => void = () => {};
  let afterHandler: (result: U) => void = () => {};

  const before = (handler: () => void) => {
    beforeHandler = handler;
    return { before, after, run };
  };

  const after = (handler: (result: U) => void) => {
    afterHandler = handler;
    return { before, after, run };
  };

  const run = async (data: T) => {
    try {
      await beforeHandler();

      const result = await action(data);

      await afterHandler(result);

      return result;
    } catch (err: unknown) {
      toast.error((err as Error).message);

      return null;
    }
  };

  return { before, after, run };
};
