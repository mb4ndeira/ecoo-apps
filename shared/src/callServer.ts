import { toast } from "sonner";
import * as Sentry from "@sentry/nextjs";

import { WARNINGS } from "@shared/next/warnings";

type CallServer<T, U> = {
  before: (handler: () => void) => Omit<CallServer<T, U>, "before">;
  after: (handler: (result: U) => void) => Omit<CallServer<T, U>, "after">;
  run: (data: T) => Promise<U | undefined>;
};

export const callServer = <T, U>(
  action: (data: T) => U,
  routes: (keyof (typeof WARNINGS)["server"])[]
): CallServer<T, U> => {
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
    } catch (err) {
      if (process.env.NODE_ENV !== "development") console.error(err);
      Sentry.captureException(err);

      let warning: { message: string } | null = null;
      routes.forEach((route) => {
        Object.values(WARNINGS["server"][route]).forEach((routeWarning) => {
          if (
            routeWarning["server_message"] ===
            (err as { message: string }).message
          )
            warning = routeWarning;
        });
      });

      if (!warning) {
        Object.values(WARNINGS["server"]["general"]).forEach(
          (generalWarning) => {
            if (
              generalWarning.server_message ===
              (err as { message: string }).message
            )
              warning = generalWarning;
          }
        );
      }

      if (!warning) {
        toast.error(
          WARNINGS["server"]["general"]["internal-server-error"].message
        );
        return;
      }

      toast.error((warning as { message: string }).message);

      return undefined;
    }
  };

  return { before, after, run };
};
