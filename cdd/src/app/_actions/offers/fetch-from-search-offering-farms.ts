"use server";

import { FarmPresenter } from "@shared/domain/use-cases/orders/search-offering-farms";
import { ACTIONS } from "@shared/_actions";

export const fetchFromSearchOfferingFarms = async (
  cycle_id: string,
  page: number | "ALL",
  product?: string
): Promise<FarmPresenter[]> => {
  if (page === "ALL") {
    let allOfferingFarms: FarmPresenter[] = [];
    let currentPage = 1;
    while (true) {
      const offeringFarms: FarmPresenter[] = await ACTIONS[
        "search-offering-farms"
      ].execute({
        cycle_id: cycle_id,
        page: currentPage,
        product: product,
      });
      if (offeringFarms.length === 0) break;
      allOfferingFarms = allOfferingFarms.concat(offeringFarms);
      currentPage++;
    }
    return allOfferingFarms;
  } else {
    const result = await ACTIONS["search-offering-farms"].execute({
      cycle_id: cycle_id,
      page: page,
      product: product,
    });
    return result;
  }
};
