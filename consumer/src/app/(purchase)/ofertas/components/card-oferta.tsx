// "use client";

import { Offer } from "@consumer/app/_actions/fetch-offers-farm";
import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import { useCartProvider } from "../../../../context/cart";

export default function CardOferta({
  offer,
  // nameFarm,
  exclude,
}: {
  offer: Offer;
  // nameFarm: string;
  exclude: boolean;
}) {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useCartProvider();

  useEffect(() => {
    let indexProductCart = cart.findIndex((productCart) => {
      return productCart.id == offer.product.id && productCart.offerId == offer.id;
    });
    if (indexProductCart !== -1) {
      setCount(cart[indexProductCart].quantity);
    }
  }, [cart, offer.id]);

  const handleAdd = () => {
    let indexProductCart = cart.findIndex(
      (productCart) =>
        productCart.id == offer.product.id && productCart.offerId == offer.id
    );
    let newCart = [...cart];

    if (indexProductCart === -1) {
      if (offer.product.pricing == "UNIT") {
        newCart.push({
          id: offer.product.id,
          name: offer.product.name,
          image: offer.product.image,
          price: offer.price,
          pricing: offer.product.pricing,
          amount: offer.amount,
          description: offer.description,
          quantity: count + 1,
          offerId: offer.id,
          // nameFarm: nameFarm
        });
        setCount(count + 1);
        setCart(newCart);
      } else {
        newCart.push({
          id: offer.product.id,
          name: offer.product.name,
          image: offer.product.image,
          price: offer.price,
          pricing: offer.product.pricing,
          amount: offer.amount,
          description: offer.description,
          quantity: count + 50,
          offerId: offer.id,
          // nameFarm: nameFarm
        });
        setCount(count + 50);
        setCart(newCart);
      }
      return;
    }

    if (offer.product.pricing == "UNIT") {
      newCart[indexProductCart].quantity = count + 1;
      setCount(count + 1);
      setCart(newCart);
    } else {
      newCart[indexProductCart].quantity = count + 50;
      setCount(count + 50);
      setCart(newCart);
    }
  };
  const handleRemove = () => {
    let indexProductCart = cart.findIndex(
      (productCart) =>
        productCart.id == offer.product.id && productCart.offerId == offer.id
    );
    let newCart = [...cart];

    if (offer.product.pricing == "UNIT") {
      newCart[indexProductCart].quantity = count - 1;
      setCount(count - 1);
      setCart(newCart);
    } else {
      newCart[indexProductCart].quantity = count - 50;
      setCount(count - 50);
      setCart(newCart);
    }

    if (newCart[indexProductCart].quantity == 0) {
      newCart.splice(indexProductCart, 1);
      setCart(newCart);
    }
  };

  const deleteProductCart = () => {
    const indexProductCart = cart.findIndex(
      (productCart) => productCart.id == offer.product.id && productCart.offerId == offer.id
    );
    const newCart = [...cart];

    if (indexProductCart !== -1) {
      newCart.splice(indexProductCart, 1);
      setCart(newCart);
    }
  };

  const imageLoader: ImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/dwm7zdljf/image/upload/v1706539060/products/256x256_${src}`;
  };

  return (
    <div className="w-full h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
      <div className="flex-none w-20 h-20 bg-[#00735E] m-2 rounded-[10px]">
        <Image
          loader={imageLoader}
          src={offer.product.image}
          width={80}
          height={80}
          alt={`${offer.product.name.toLocaleLowerCase()}.jpg`}
        />
      </div>
      <div className="grow flex flex-col h-20 mt-2 mb-2">
        <p className="w-full text-left font-poppins text-sm text-[#2F4A4D]">{offer.product.name}</p>
        <p className="w-full text-left font-poppins text-xs text-[#2F4A4D]">
          Quantidade: {offer.product.pricing == "UNIT" ? "1 Unidade" : "50g"}
        </p>
        {/* <p className="w-full text-left font-poppins text-xs">
          Produtor: {nameFarm}
        </p> */}
        <p className="w-full text-left font-poppins text-[18px] text-[#2F4A4D] pt-3">
          {offer.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <div className="flex-none flex flex-col-reverse mw-[90px] h-20 m-2">
        <div className="flex-none bg-white rounded-md flex flex-row w-24 h-9">
          <div className="flex-none">
            <button
              type="button"
              className={ count != 0 ? "text-[#00735E] text-2xl p-1": "text-[#00735E] text-2xl p-1 opacity-25"}
              onClick={handleRemove}
              disabled={count == 0}
            >
              -
            </button>
          </div>
          <div className="grow flex items-center justify-center">
            <p className="font-poppin text-base text-center text-[#2F4A4D] p-1">
              {offer.product.pricing == "UNIT" || count == 0 ? count: count / 50}
            </p>
          </div>
          <div className="flex-none">
            <button
              type="button"
              className={ count != offer.amount ? "text-[#00735E] text-2xl p-1": "text-[#00735E] text-2xl p-1 opacity-25"}
              onClick={handleAdd}
              disabled={count == offer.amount}
            >
              +
            </button>
          </div>
        </div>
        {}
        <div className="grow">
          {exclude ? (
            <>
              <div className="flex flex-row-reverse">
                <div className="w-5 h-5">
                  <Image
                    src="/trash.png"
                    onClick={deleteProductCart}
                    alt="trash"
                    width={15}
                    height={15}
                  ></Image>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
