"use client";
import { useEffect, useState } from "react";
import { Cycle, fetchCycles } from "../../_actions/fetch-cycles";
import { Offer, Product, fetchOffers } from "../../_actions/fetch-offers";
import { useCartProvider } from "../../carrinho/context";
import Header from "../../header/page";
import SendTelegram from "../../sendtelegram/page";
import CardProduto from "../components/card-produto";
import { useParams } from "next/navigation";

export default function Ofertas() {


  const params = useParams();
  
  const [cycles, setcycle] = useState([] as Cycle[]);
  const [offers, setOffers] = useState([] as Offer[]);
  const [productsOffer, setProductsOffer] = useState([] as Product[]);
  const [page, setPage] = useState(1 as number);
  const { cart, setCart } = useCartProvider();

  useEffect(() => {
    (async () => {
      setcycle(await fetchCycles());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (cycles.length > 0) {
        const cycle_id = cycles.find(
          (cycle) => cycle.alias.toLocaleLowerCase() == "semanal"
        )?.id;
        setOffers(await fetchOffers(cycle_id, page));
      }
    })();
  }, [cycles]);

  useEffect(() => {

    let data = offers.find((offer) => (offer.id = params.id as string))?.offer.products;

    if (!data && offers.length > 0) {
      setPage(page + 1);
    }

    setProductsOffer(data ?? []);
  }, [offers]);

  // useEffect(() => {
  //   if (cart.products.length > 0) {
  //     let newTotal = 0;
  //     cart.products.forEach((product) => {
  //       let valueTotalProduct;

  //       if (product.pricing != "UNIT")
  //         valueTotalProduct = product.price * ((product.quantity ?? 0) / 50);
  //       else valueTotalProduct = product.price * (product.quantity ?? 0);

  //       newTotal = newTotal + valueTotalProduct;
  //     });

  //     console.log("newTotal");
  //     console.log(newTotal);

  //     cart.total = newTotal;

  //     setCart(cart);
  //   }
  // }, [cart]);

  const handleAddOrRemove = (product: Product) => {
    let indexProduct = cart.findIndex(
      (productCart) => productCart.id == product.id
    );

    if (indexProduct !== -1)
      if (product.quantity == 0) 
        cart.splice(indexProduct, 1);
      else 
        cart[indexProduct].quantity = product.quantity;
    else 
      cart.push(product);

    setCart(cart);
    console.log("cart");
    console.log(cart);
  };


  return (
    <>
      <SendTelegram></SendTelegram>

      <div className="flex flex-col">
        <Header linkBack="/produtores" title="Produtos"></Header>

        <div className="scroll-smooth scrol-ml-1 ml-3 mr-3 mt-3">
          {productsOffer && productsOffer.length !== 0
            ? productsOffer.map((product, index) => {
                return (
                  <CardProduto
                    product={product}
                    onAddOrRemove={handleAddOrRemove}
                    exclude={null}
                  ></CardProduto>
                );
              })
            : null}
        </div>

      </div>

    </>
  );
}
