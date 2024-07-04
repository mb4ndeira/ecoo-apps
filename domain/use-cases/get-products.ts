import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

import { PRODUCTS } from "@producer/app/(regular)/produtos/data";

export const getProducts: UseCaseHandler<
  { access_token: string },
  { products: unknown[] }
> = async ({ access_token }, stubbed, { get }) => {
  if (stubbed) {
    const products = (await get("products", PRODUCTS)) as unknown[];
    return new SuccessReturn({ products });
  }

  const products = (await ecooAPIHTTPProvider.getProducts(access_token)).data;

  return new SuccessReturn({ products });
};
