import { UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

import { PRODUCTS } from "@producer/app/(regular)/produtos/data";

export const getProducts: UseCaseHandler<
  { access_token: string },
  Promise<any[]>
> = async ({ access_token }, stubbed, { get }) => {
  const products = !stubbed
    ? (await ecooAPIHTTPProvider.getProducts(access_token)).data
    : ((await get("products", PRODUCTS)) as any[]);

  return products;
};
