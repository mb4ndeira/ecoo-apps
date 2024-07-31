"use client"

import { fetchViewOrder } from "@cdd/app/_actions/fetch-view-order";
import ApproveBagModal from "@cdd/components/ApproveBagModal";
import { StatusContent } from "@cdd/components/Modal";
import RejectBagModal from "@cdd/components/RejectBagModal";
import UpdateOrderStatusButton from "@cdd/components/UpdateOrderStatusButton";
import { OrderWithItems } from "@shared/domain/use-cases/view-order";
import { useParams } from "next/navigation";
import Button from "@shared/components/Button";
import BagMiniTable from "./components/BagMiniTable";

export default async function Home() {
  const { id } = useParams();

  if(!id){

  }

  return (
    <div className="w-full h-full p-5 pb-6 flex items-center flex-col">
      <div className="flex flex-col h-[18%] w-full items-center justify-end mt-4">
        <h1 className="text-3xl font-medium text-slate-gray mb-4 text-center">Conteúdo da sacola</h1>
        <span className="text-sm font-medium text-slate-gray mb-6 text-center">
          Monte a sacola abaixo e, após concluir, < br/> marque como pronta
        </span>
      </div>
      <div className="w-full h-[82%] overflow-y-auto">
        <BagMiniTable />
      </div>
    </div>

    // <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
    //   <div className="flex flex-col pt-16 items-center h-[10.35rem] pb-4 w-full">
    //     <span className="text-center text-3xl font-medium text-slate-gray">
    //       Conteúdo da sacola
    //     </span>
    //     <span className="mt-2 text-center text-sm font-medium text-slate-gray">
    //       {!selectedOrder ? "Sacola não encontrada" : statusContent.subtitle}
    //     </span>
    //   </div>
    //   {selectedOrder && (
    //     <div className="h-[calc(var(--min-page-height)-10.35rem)] w-full flex flex-col justify-between pb-6 gap-4">
    //       <BagMiniTable order={selectedOrder} />
    //       <statusContent.modalComponent
    //         openButton={statusContent.buttonTitle}
    //         button2={
    //           <UpdateOrderStatusButton
    //             orderId={selectedOrder.id}
    //             updateStatusTo={statusContent.updateStatus}
    //             buttonTitle="Confirmar"
    //             buttonColor={statusContent.buttonColor}
    //             successUrl={statusContent.modalLink}
    //           />
    //         }
    //         description={statusContent.modalDescription}
    //       />
    //     </div>
    //   )}
    // </div>
  );
}
