"use client";

import CardProduto from "../ofertas/components/card-produto";
import { useCartProvider } from "./context";
import { Product } from "../../_actions/fetch-offers";

export default function FinalizarCompras() {
  const { cart, setCart } = useCartProvider();
  const total = 0;

  const handleAddOrRemove = (product: Product) => {
    let indexProduct = cart.findIndex(
      (productCart) => productCart.id == product.id
    );

    if (indexProduct !== -1)
      if (product.quantity == 0) cart.splice(indexProduct, 1);
      else cart[indexProduct].quantity = product.quantity;
    else cart.push(product);

    setCart(cart);

    console.log("cart");
    console.log(cart);
    // setData(products);
  };
  const exludeItemCar = (id: any) => {
    console.log("id");
    console.log(id);

    let indexProduct = cart.findIndex((product) => product.id == id);

    cart.splice(indexProduct, 1);

    setCart(cart);
  };

  return (
    <>
      <div className="h-screen scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
        {cart && cart.length !== 0
          ? cart.map((product, index) => {
              return (
                <CardProduto
                  product={product}
                  onAddOrRemove={handleAddOrRemove}
                  exclude={exludeItemCar}
                ></CardProduto>
              );
            })
          : null}
      </div>

      <div className="w-full min-h-[60px] bg-[#F7F7F7] flex flex-col">
        {/* <div className="w-full font-inter text-xs">
          <span className="w-1/2 text-left p-2 inline-block">Subtotal:</span>
          <span className="w-1/2 text-right p-2 inline-block">R$23,90</span>
        </div>
        <div className="w-full font-inter text-xs">
          <span className="w-1/2 text-left p-2 inline-block">Entrega:</span>
          <span className="w-1/2 text-right p-2 inline-block">R$10,00</span>
        </div> */}
        <div className="bg-[#D1D1D6] w-[90%] border-[1px]"></div>
        <div className="w-full font-inter">
          <span className="w-1/2 text-left text-xs p-2 inline-block">
            Total:
          </span>
          <span className="w-1/2 text-right text-base p-2 inline-block">
            {total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </>
  );
}
