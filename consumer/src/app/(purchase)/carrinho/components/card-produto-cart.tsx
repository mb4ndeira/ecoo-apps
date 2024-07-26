// "use client";

import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import { ProductCart, useCartProvider } from "../../../../context/cart";

export default function CardProdutoCart({
  product,
  nameFarm,
  exclude,
}: {
  product: ProductCart;
  nameFarm: string;
  exclude: boolean;
}) {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useCartProvider();

  useEffect(() => {
    let indexProductCart = cart.findIndex((productCart) => {
      return productCart.id == product.id && productCart.offerId == product.offerId;
    });
    if (indexProductCart !== -1) {
      setCount(cart[indexProductCart].quantity);
    }
  }, [cart, product.id]);

  const handleAdd = () => {
    let indexProductCart = cart.findIndex(
      (productCart) =>
        productCart.id == product.id && productCart.offerId == product.offerId
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
          offerId: product.offerId,
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
          offerId: product.offerId,
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
        productCart.id == product.id && productCart.offerId == product.offerId
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
      (productCart) => productCart.id == product.id && productCart.offerId == product.offerId
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
          src={product.image}
          width={80}
          height={80}
          alt={`${product.name.toLocaleLowerCase()}.jpg`}
        />
      </div>
      <div className="grow flex flex-col h-20 mt-2 mb-2">
        <p className="w-full text-left font-poppins text-sm">{product.name}</p>
        <p className="w-full text-left font-poppins text-xs">
          Quantidade: {product.pricing == "UNIT" ? "1 Unidade" : "50g"}
        </p>
        {/* <p className="w-full text-left font-poppins text-xs">
          Produtor: {nameFarm}
        </p> */}
        <p className="w-full text-left font-poppins text-[18px] pt-3">
          {product.price.toLocaleString("pt-br", {
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
              className={ count != 0 ? "text-[#2F4A4D] text-2xl p-1": "text-[#2F4A4D] text-2xl p-1 opacity-25"}
              onClick={handleRemove}
              disabled={count == 0}
            >
              -
            </button>
          </div>
          <div className="grow">
            <p className="font-poppins text-base text-center text-[#2F4A4D] p-1">
              {product.pricing == "UNIT" || count == 0 ? count: count / 50}
            </p>
          </div>
          <div className="flex-none">
            <button
              type="button"
              className={ count != product.amount ? "text-[#2F4A4D] text-2xl p-1": "text-[#2F4A4D] text-2xl p-1 opacity-25"}
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
