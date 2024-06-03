"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function FinalizarCompras(){

    const router: any = useRouter();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      if (router.query.products) {
        setProducts(JSON.parse(router.query.products));
      }
    }, [router.query.products]);
  
    return (

    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Quantidade</th>
          <th className="px-4 py-2">Valor</th>
          <th className="px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item: any, index: number) => (
          <tr key={index} className="bg-gray-100">
            <td className="border px-4 py-2">{item.product.name}</td>
            <td className="border px-4 py-2">{item.quantity}</td>
            <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
            <td className="border px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>

      )
}