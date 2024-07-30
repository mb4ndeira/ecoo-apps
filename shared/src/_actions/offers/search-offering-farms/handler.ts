import { cookies } from "next/headers";

import { ExceptionReturn, SuccessReturn } from "@shared/core/UseCase";
import { ActionHandler } from "../..";
import { FarmPresenter } from "@shared/domain/use-cases/orders/search-offering-farms";

interface SearchOfferingFarmsFetchData {
  cycle_id: string;
  page: number;
  product?: string;
}

export const searchOfferingFarms: ActionHandler<
  SearchOfferingFarmsFetchData,
  Promise<FarmPresenter[]>
> = async (data, useCases) => {
  const result = await useCases["search-offering-farms"].execute({
    cycle_id: data.cycle_id,
    page: data.page,
    product: data.product,
  });

  if (result instanceof ExceptionReturn) {
    throw new Error(result.message);
  }

  return (result as SuccessReturn<any>).data;
};
