import { ActionHandler } from "..";

interface RegisterAgribusinessData {
  agribusiness_name: string;
  caf: string;
}

export const registerAgribusiness: ActionHandler<
  RegisterAgribusinessData,
  void
> = async (data) => {};
