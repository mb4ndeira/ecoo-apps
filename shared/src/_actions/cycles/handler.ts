import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "..";
import { cookies } from "next/headers";
import { CycleDTO } from "@shared/domain/dtos/cycle-dto";

export const getCycles: ActionHandler<
  {},
  Promise<CycleDTO[]>
> = async (_data, useCases) => {
  const result = await useCases["get-cycles"].execute({
    access_token: cookies().get("token")?.value as string,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data;
};