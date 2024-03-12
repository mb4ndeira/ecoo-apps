import { Order } from "@cdd/app/_actions/fetch-orders";

interface OrdersProps {
  orders: Order[];
}

export function Orders({ orders }: OrdersProps) {
  return (
    <div className="container mx-auto">
      <table className="table-auto w-full border border-gray-200">
        <thead className="text-slate-gray">
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-200 text-center">
              Pagamento
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-center">
              Preço
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-center">
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
              <td className="px-4 py-2 border-b border-gray-200">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
