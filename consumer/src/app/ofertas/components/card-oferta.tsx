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
    <div>
      <div className="relative w-full min-w-[130px] h-[100px] rounded-[10px]">
                  Image
      </div>
      <span className="pt-2.5 text-base leading-[22px] tracking-tight text-slate-gray">
            {offer.product.name}
      </span>
      <br/>
      <span className="pt-2.5 text-base leading-[22px] tracking-tight text-slate-gray">
            {count}
      </span>
      <br/>
      <button
            type="button"
            disabled={checkLimitMaxQuantity()}
            onClick={handleAdd}
            className="bg-green-500 mr-2 text-white font-bold py-2 px-4 rounded-full"
          >
            +
      </button>
      <button
            type="button"
            disabled={count==0}
            onClick={handleRemove}
            className="bg-red-500 ml-2 text-white font-bold py-2 px-4 rounded-full"
          >
            -
      </button>
    </div>

)
}
  