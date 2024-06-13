"use client";

import { Order } from "@cdd/app/_actions/fetch-orders";
import { useRouter } from "next/navigation";
import { MdPending } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "@shared/components/Button";

interface OrdersProps {
  orders: Order[] | [];
}

export function OrdersTable({ orders }: OrdersProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    const n = id.toString();
    const path = `/pedidos/${n}`;

    router.push(path);
  };

  const getStatusIcon = (status: string) => {
    if (status === "PENDING") return ( 
      <Button className="text-xl">
        <MdPending /> 
      </Button>
    );
    if (status === "Enviado") return ( 
      <Button className="text-xl text-slate-gray">
        <FaCheckCircle className="text-slate-gray h-4 w-4" /> 
      </Button>
     );
    if (status === "Cancelado") return ( 
      <Button className="text-xl text-slate-gray">
        <IoIosCloseCircleOutline />
      </Button>
    );
    return null
  };

  return (
    <div className="w-full h-full flex flex-col">
      {orders.length === 0 ? (
        <>
          <span>Ainda não tem pedidos</span>
        </>
      ) : (
        <table className="bg-white text-theme-primary text-left leading-7 w-full table-fixed rounded-lg mb-4 overflow-y-hidden">
        <thead className="w-full">
          <tr className="text-[rgb(84,95,113)]">
            <th className="truncate w-[30%] text-[#979797] font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
              Pagamento
            </th>
            <th className="truncate w-1/2 text-[#979797]  font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
              Produtor
            </th>
            <th className="truncate w-1/5 text-[#979797] font-inter border-b border-theme-background p-2 text-xs font-semibold text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td className="border-b truncate text-[#545F71] border-[#979797] p-2">
                {order.payment_method}
              </td>
              <td className="border-b truncate text-[#545F71] border-[#979797] p-2">
                {`${order.customer.first_name} ${order.customer.last_name}`}
              </td>
              <td className="border-b truncate text-[#545F71] border-[#979797] p-2">
                {getStatusIcon(order.status)}
                {/* {order.status} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}
