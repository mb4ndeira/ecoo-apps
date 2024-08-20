'use client'

import { FarmOrders, fetchFarmOrders } from "@cdd/app/_actions/farm/fetch-farm-orders";
import { handleOrderDelivery } from "@cdd/app/_actions/order/handle-order-delivery";
import { useGetLocalStorage } from "@cdd/app/hooks/useGetLocalStorage";
import Modal from "@cdd/components/Modal";
import dayjs from "dayjs";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FarmOrdersTable() {
  const router = useRouter();

  const [farmOrders, setFarmOrders] = useState<FarmOrders | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  const { farm_id } = useParams();

  if(!farm_id){
    notFound()
  }

  const cycle = useGetLocalStorage('selected-cycle')

  if(!cycle){
    notFound()
  }

  const { id } = cycle

  useEffect(() => {
    (async () => {
      const response = await fetchFarmOrders({ 
        cycle_id: id,
        farm_id: farm_id as string
      });

      if(response.message){
        router.push('/404')
        return
      }

      if(response.data){
        setFarmOrders(response.data)
      }

      setIsLoading(false)
    })()
  }, [])


  const handleStatusOrder = async (status: "RECEIVED" | "CANCELLED") => {
    try {
      const cycle = useGetLocalStorage('selected-cycle')

      const { id } = cycle

      await handleOrderDelivery({
        cycle_id: id,
        farm_id: farm_id as string,
        status
      });

      if (status === "RECEIVED") {
        router.push(`/ofertas/${farm_id}/aprovar`);
      } else if (status === "CANCELLED") {
        router.push(`/ofertas/${farm_id}/rejeitar`);
      }
    } catch (error) {
      toast.error("Erro ao atualizar status do pedido.");
    }
  };

  const getNextSaturdayDate = () => {
    const today = dayjs();
    const dayOfWeek = today.day();
    const daysUntilSaturday = 6 - dayOfWeek;
    const nextSaturday = today.add(daysUntilSaturday, 'day');

    return nextSaturday.format("DD/MM/YYYY");
  };

  if (!farm_id) return null;

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full mx-auto bg-white rounded-lg">
            <div className="flex gap-10 items-start text-theme-primary border-b-[1px] border-theme-background p-3">
              <span className="w-1/5">Pedido:</span>
              <span className="w-4/5">{farmOrders?.id}</span>
            </div>
            <div className="flex gap-10 items-start text-theme-primary border-b-[1px] border-theme-background p-3">
              <span className="w-1/5">Produtor:</span>
              <span className="w-4/5">{farmOrders?.name}</span>
            </div>
            <div className="flex gap-10 items-start text-theme-primary border-b-[1px] border-theme-background p-3">
              <span className="w-1/5">Prazo:</span>
              <span className="w-4/5">{getNextSaturdayDate()}</span>
            </div>
            <div className="text-theme-primary p-3">Conteúdo:</div>
            <div className="pl-3 pb-3 text-theme-primary">
              {farmOrders?.orders.map(order => (
                <div key={order.id}>
                  {`${order.amount}${order.offer.product.pricing === 'WEIGHT' ? 'g' : 'un'} - ${order.offer.product.name}`}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[10%] flex gap-2 justify-center items-end">
            <Modal
              openButton="Rejeitar"
              title="Você tem certeza?"
              description="Após rejeitar a entrega essa operação não poderá ser desfeita. Em caso de erro, entre em contato com o suporte."
              approvalButtons={true}
              textButton1="Cancelar"
              textButton2="Rejeitar"
              bgButton2="#FF7070"
              onClick={() => handleStatusOrder("CANCELLED")}
            />
            <Modal
              openButton="Aprovar"
              title="Você tem certeza?"
              description="Após aprovar a oferta essa operação não poderá ser desfeita. Em caso de erro, entre em contato com o suporte."
              approvalButtons={true}
              textButton1="Cancelar"
              textButton2="Aprovar"
              bgButton2="#00735E"
              onClick={() => handleStatusOrder("RECEIVED")}
            />
          </div>
        </div>
      )}
    </>
  );
}
