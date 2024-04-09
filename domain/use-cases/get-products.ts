import { UseCaseHandler } from "@shared/core/UseCase";

import { PRODUCTS } from "@producer/app/(regular)/produtos/data";

export const getProducts: UseCaseHandler<
  { access_token: string },
  Promise<any[]>
> = async ({ access_token }, stubbed, { get }, axios) => {
  const products = !stubbed
    ? await axios
        .get(`${process.env.API_URL}/products/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => response.data)
    : await get("products", PRODUCTS);

  return products;
};
