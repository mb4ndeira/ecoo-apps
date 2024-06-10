"use client";

import { useState } from "react";



export default function CardOferta({offer, onAddOrRemove}: {offer: any, onAddOrRemove: any}){
 
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if(offer.product.pricing == "UNIT"){
      setCount(count + 1);
      offer['quantity'] = count + 1;
    }else{
      setCount(count + 50);
      offer['quantity'] = count + 50;
    }
    onAddOrRemove(offer);
  }

  const handleRemove = () => {
    if(offer.product.pricing == "UNIT"){
      setCount(count - 1);
      offer['quantity'] = count - 1;
    }else{
      setCount(count - 50);
      offer['quantity'] = count - 50;
    }
    onAddOrRemove(offer);
  }

  const checkLimitMaxQuantity = () => {
    return count == offer.amount;
  }

return (
    <div className="w-[350px] h-[100px] bg-[rgb(246,246,246)] flex rounded-2xl m-2">
        <div className="flex w-[80px] h-20 bg-[#00735E] m-2 rounded-lg">
        </div>
        <div className="flex flex-col w-[140px] h-20 mt-2 mb-2">
          <p className="w-full text-left font-poppins text-sm">{offer.product.name}</p>
          <p className="w-full text-left font-poppins text-xs">Quantidade: 1kg</p>
          <p className="w-full text-left font-poppins text-[18px] pt-3">R${offer.price}</p>
        </div>
        <div className="flex flex-col-reverse min-w-[90px] h-20 mt-2 mb-2 ml-2">
          <div className="bg-white rounded-md grid grid-cols-3 w-24 h-9">
            <button type="button" className="text-[#2F4A4D] text-2xl text-center p-2 flex flex-row" onClick={handleRemove} disabled={count==0}>-</button>
            <p className="w-full font-poppins text-base text-[#2F4A4D] text-center p-2 flex flex-row">{count}</p>
            <button type="button" className="text-[#2F4A4D] text-xl text-center p-2 flex flex-row" onClick={handleAdd} disabled={count==offer.amount}>+</button>
          </div>
        </div>
    </div>
 )
}
  