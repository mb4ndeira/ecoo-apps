"use client";

import { Order } from "@cdd/app/_actions/fetch-orders";
import { useRouter } from "next/navigation";

interface OrdersProps {
  orders: Order[];
}

export function Orders({ orders }: OrdersProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    const n = id.toString();
    const path = `/pedidos/${n}`;

    router.push(path);
  };

  return (
    <div>
      <table className="bg-white text-theme-primary text-left leading-7 w-full table-fixed rounded-lg mb-4">
        <thead className="text-slate-gray">
          <tr className="">
            <th className="truncate font-inter border-b border-theme-background p-2 text-xs font-semibold text-battleship-gray text-center">
              Pagamento
            </th>
            <th className="truncate font-inter border-b border-theme-background p-2 text-xs font-semibold text-battleship-gray text-center">
              Preço
            </th>
            <th className="truncate font-inter border-b border-theme-background p-2 text-xs font-semibold text-battleship-gray text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="border-b border-theme-background p-2">
                {order.payment_method}
              </td>
              <td className="border-b border-theme-background p-2">
                {order.price}
              </td>
              <td className="border-b border-theme-background p-2">
                <button onClick={() => handleClick(order.id)}>
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
