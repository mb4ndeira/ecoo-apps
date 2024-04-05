'use client'

import { Order } from "@cdd/app/_actions/fetch-orders";
import { usePathname, useRouter } from "next/navigation";
import { use, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface OrdersProps {
  orders: Order[];
  nextPage: () => void
  backPage: () => void
  page: number
}

export function Orders({ orders, nextPage, backPage, page }: OrdersProps) {
  const router = useRouter()
  const pathName = usePathname()

  const handleClick = (id: string) => {
    const newPath = `${pathName}/${id}`

    router.push(newPath)
  } 

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <table className="table-auto w-full border border-gray-200 overflow-y-hidden">
        <thead className="text-slate-gray">
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-200 text-left">
              Pagamento
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left">
              Preço
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-2 border-b border-gray-200">
                {order.payment_method}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {order.price}
              </td>
              <td onClick={() => handleClick(order.id)} className="px-4 py-2 border-b border-gray-200 cursor-pointer">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center gap-4 items-center text-lg text-slate-gay mt-4 bottom-0">
          <button onClick={backPage}>
            <IoIosArrowBack />
          </button>
          {page}
          <button onClick={nextPage}>
            <IoIosArrowForward />
          </button>
        </div>
    </div>
  );
}
