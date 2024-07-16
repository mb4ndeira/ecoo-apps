import { fetchViewOrder } from "@cdd/app/_actions/fetch-view-order";
import ApproveBagModal from "@cdd/components/ApproveBagModal";
import { StatusContent } from "@cdd/components/Modal";
import RejectBagModal from "@cdd/components/RejectBagModal";
import UpdateOrderStatusButton from "@cdd/components/UpdateOrderStatusButton";
import { OrderWithItems } from "@shared/domain/use-cases/view-order";
import SendBagMiniTable from "./components/SendBagMiniTable";

export default async function Home({ params }: { params: { id: string } }) {
  let selectedOrder: OrderWithItems = await fetchViewOrder(params.id);
  let statusContent: StatusContent = {} as StatusContent;

  if (selectedOrder) {
    const status = selectedOrder.status;
    switch (status) {
      case "READY":
        statusContent = {
          subtitle:
            "Marque a sacola como enviada assim que ela estiver a caminho do cliente",
          buttonTitle: "Marcar como enviada",
          buttonColor: "#00735E",
          modalLink: `/enviar-sacola/${selectedOrder?.id}/enviar`,
          modalComponent: ApproveBagModal,
          modalDescription:
            "Ao alterar o status para enviada, o cliente será notificado que ela está a caminho.",
          updateStatus: "DISPATCHED",
        };
        break;

      case "DISPATCHED":
        statusContent = {
          subtitle:
            "Houve um problema com a entrega? Mude o status da sacola para pronta e a reenvie",
          buttonTitle: "Alterar para pronta",
          buttonColor: "#FF7070",
          modalLink: `/enviar-sacola/${selectedOrder?.id}/alterar`,
          modalComponent: RejectBagModal,
          modalDescription: "O status da sacola será alterado para pronto e ela deverá ser enviada novamente.",
          updateStatus: "READY",
        };
        break;

      default:
        break;
    }
  }

  return (
    <div className="flex flex-col h-[inherit] bg-theme-background px-5 justify-start w-full">
      <div className="flex flex-col pt-16 items-center h-[10.35rem] pb-4 w-full">
        <span className="text-center text-3xl font-medium text-slate-gray">
          Enviar sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          {!selectedOrder ? "Sacola não encontrada" : statusContent.subtitle}
        </span>
      </div>
      {selectedOrder && (
        <div className="h-[calc(var(--min-page-height)-10.35rem)] w-full flex flex-col justify-between pb-6 gap-4">
          <SendBagMiniTable order={selectedOrder} />
          <statusContent.modalComponent
            openButton={statusContent.buttonTitle}
            button2={
              <UpdateOrderStatusButton
                orderId={selectedOrder.id}
                updateStatusTo={selectedOrder.status}
                buttonTitle="Confirmar"
                buttonColor={statusContent.buttonColor}
                successUrl={statusContent.modalLink}
              />
            }
            description={statusContent.modalDescription}
          />
        </div>
      )}
    </div>
  );
}
