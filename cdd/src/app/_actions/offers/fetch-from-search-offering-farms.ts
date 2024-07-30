"use server";

import { FarmDTO } from "@shared/domain/dtos/farm-dto";
import { ACTIONS } from "@shared/_actions";

export const fetchFromSearchOfferingFarms = async (
  cycle_id: string,
  page: number | "ALL",
  product?: string
): Promise<FarmDTO[]> => {
  if (page === "ALL") {
    let allOfferingFarms: FarmDTO[] = [];
    let currentPage = 1;
    while (true) {
      const offeringFarms: FarmDTO[] = await ACTIONS[
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
