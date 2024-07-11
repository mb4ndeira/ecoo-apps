"use client";

import { useEffect, useState } from "react";
import { useCartProvider } from "../../../context/cart";
import CardProduto from "../ofertas/components/card-produto";

export default function FinalizarCompras() {
  const { cart, setCart } = useCartProvider();
  const [ totalPurchase, setTotalPurchase ] = useState(0)

  useEffect(() => {

    let total = 0;

    cart.forEach((productCart) => {
      if(productCart.pricing == 'UNIT'){
        total = total + (productCart.price * productCart.quantity);
      }else{
        total = total + (productCart.price * productCart.quantity);
      }
    });

    setTotalPurchase(total);
    
  }, [cart]);

  return (
    <>
      <div className="overflow-y-scroll scrol-ml-1 ml-3 mr-3 mt-3">
        {cart && cart.length !== 0
          ? cart.map((product, index) => {
              return (
                <CardProduto
                  product={product}
                  offerId={product.offerId}
                  nameFarm={product.nameFarm}
                  exclude={true}
                ></CardProduto>
              );
            })
          : null}
      </div>

      <div className="min-h-[60px] bg-[#F7F7F7] flex flex-col">
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
            {totalPurchase.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </>
  );
}
