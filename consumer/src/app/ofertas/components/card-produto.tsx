"use client";

import Image from "next/image";
import { useState } from "react";



export default function CardProduto({product, onAddOrRemove, exclude}: {product: any, onAddOrRemove: any, exclude: any}){
 
  const [count, setCount] = useState(product?.quantity ?? 0);

  const handleAdd = () => {
    if(product.pricing == "UNIT"){
      setCount(count + 1);
      product['quantity'] = count + 1;
    }else{
      setCount(count + 50);
      product['quantity'] = count + 50;
    }
    onAddOrRemove(product);
  }

  const handleRemove = () => {
    if(product.pricing == "UNIT"){
      setCount(count - 1);
      product['quantity'] = count - 1;
    }else{
      setCount(count - 50);
      product['quantity'] = count - 50;
    }
    onAddOrRemove(product);
  }

  const excludeItemCar  = () => {
    exclude(product.id);
  }

return (
    <div className="w-full h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl mb-3">
        <div className="flex-none w-20 h-20 bg-[#00735E] m-2 rounded-2xl">
        </div>
        <div className="grow flex flex-col h-20 mt-2 mb-2">
          <p className="w-full text-left font-poppins text-sm">{product.name}</p>
          <p className="w-full text-left font-poppins text-xs">Quantidade: { product.pricing == "UNIT" ? "1 Unidade": "50g"}</p>
          <p className="w-full text-left font-poppins text-[18px] pt-3">R${product.price}</p>
        </div>
        <div className="flex-none flex flex-col-reverse mw-[90px] h-20 m-2">
          <div className="flex-none bg-white rounded-md flex flex-row w-24 h-9">
            <div className="flex-none">
              <button type="button" className="text-[#2F4A4D] text-2xl p-1" onClick={handleRemove} disabled={count==0}>-</button>
            </div>
            <div className="grow">
              <p className="font-poppins text-base text-center text-[#2F4A4D] p-1">{product?.quantity ?? 0}</p>
            </div>
            <div className="flex-none">
              <button type="button" className="flex-none text-[#2F4A4D] text-xl p-1" onClick={handleAdd} disabled={count==product.amount}>+</button>
            </div>
          </div>
          {}
          <div className="grow">
          {exclude ? (
            <>
            <div className="flex flex-row-reverse">
              <div className="w-5 h-5">
                <Image src="/trash.png" onClick={excludeItemCar} alt="cart" width={15} height={15}></Image>
              </div>
            </div>
            </>
          ): null}
          </div>
        </div>
    </div>
 )
}
  