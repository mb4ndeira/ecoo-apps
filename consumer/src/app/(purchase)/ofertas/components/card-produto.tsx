// "use client";

import { Product } from "@consumer/app/_actions/fetch-offers";
import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import { ProductCart, useCartProvider } from "../../../../context/cart";

export default function CardProduto({
  product,
  offerId,
  nameFarm,
  exclude,
}: {
  product: Product | ProductCart;
  offerId: string;
  nameFarm: string;
  exclude: boolean;
}) {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useCartProvider();

  useEffect(() => {
    let indexProductCart = cart.findIndex((productCart) => {
      // console.log(productCart);
      // console.log(offerId);
      return productCart.id == product.id && productCart.offerId == offerId;
    });
    if (indexProductCart !== -1) {
      // console.log("indexProductCart")
      // console.log(indexProductCart)
      setCount(cart[indexProductCart].quantity);
    }
  }, [cart, product.id]);

  const handleAdd = () => {
    let indexProductCart = cart.findIndex(
      (productCart) =>
        productCart.id == product.id && productCart.offerId == offerId
    );
    let newCart = [...cart];

    if (indexProductCart === -1) {
      if (product.pricing == "UNIT") {
        newCart.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          pricing: product.pricing,
          amount: product.amount,
          description: product.description,
          quantity: count + 1,
          offerId: offerId,
          nameFarm: nameFarm
        });
        setCount(count + 1);
        setCart(newCart);
      } else {
        newCart.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          pricing: product.pricing,
          amount: product.amount,
          description: product.description,
          quantity: count + 50,
          offerId: offerId,
          nameFarm: nameFarm
        });
        setCount(count + 50);
        setCart(newCart);
      }
      return;
    }

    if (product.pricing == "UNIT") {
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
        productCart.id == product.id && productCart.offerId == offerId
    );
    let newCart = [...cart];

    if (product.pricing == "UNIT") {
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
      (productCart) => productCart.id == product.id
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
      <div className="flex-none w-20 h-20 bg-[#00735E] m-2 rounded-2xl">
        <Image
          loader={imageLoader}
          src={product.image}
          width={80}
          height={80}
          alt={`${product.name.toLocaleLowerCase()}.jpg`}
          quality={256}
        />
      </div>
      <div className="grow flex flex-col h-20 mt-2 mb-2">
        <p className="w-full text-left font-poppins text-sm">{product.name}</p>
        <p className="w-full text-left font-poppins text-xs">
          Quantidade: {product.pricing == "UNIT" ? "1 Unidade" : "50g"}
        </p>
        <p className="w-full text-left font-poppins text-xs">
          Produtor: {nameFarm}
        </p>
        <p className="w-full text-left font-poppins text-[18px] pt-3">
          R${product.price}
        </p>
      </div>
      <div className="flex-none flex flex-col-reverse mw-[90px] h-20 m-2">
        <div className="flex-none bg-white rounded-md flex flex-row w-24 h-9">
          <div className="flex-none">
            <button
              type="button"
              className="text-[#2F4A4D] text-2xl p-1"
              onClick={handleRemove}
              disabled={count == 0}
            >
              -
            </button>
          </div>
          <div className="grow">
            <p className="font-poppins text-base text-center text-[#2F4A4D] p-1">
              {count}
            </p>
          </div>
          <div className="flex-none">
            <button
              type="button"
              className="flex-none text-[#2F4A4D] text-xl p-1"
              onClick={handleAdd}
              disabled={count == product.amount}
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
