import { fetchViewOrder } from "@cdd/app/_actions/fetch-view-order";
import ApproveBagModal from "@cdd/components/ApproveBagModal";
import { StatusContent } from "@cdd/components/Modal";
import RejectBagModal from "@cdd/components/RejectBagModal";
import UpdateOrderStatusButton from "@cdd/components/UpdateOrderStatusButton";
import { OrderWithItems } from "@shared/domain/use-cases/view-order";
import BagMiniTable from "./components/BagMiniTable";

export default async function Home({ params }: { params: { id: string } }) {
  let selectedOrder: OrderWithItems = await fetchViewOrder(params.id);
  let statusContent: StatusContent = {} as StatusContent;

  if (selectedOrder) {
    const status = selectedOrder.status;
    switch (status) {
      case "PENDING":
        statusContent = {
          subtitle:
            "Monte a sacola abaixo e, após concluir, marque como pronta",
          buttonTitle: "Marcar como pronta",
          buttonColor: "#00735E",
          modalLink: `/montar-sacola/${selectedOrder?.id}/aprovar`,
          modalComponent: ApproveBagModal,
          modalDescription:
            "Ao marcar a sacola como pronta, o cliente será notificado.",
          updateStatus: "READY",
        };
        break;

      case "READY":
        statusContent = {
          subtitle:
            "A sacola não está pronta? Clique no botão abaixo e altere seu status para pendente",
          buttonTitle: "Alterar para pendente",
          buttonColor: "#FF7070",
          modalLink: `/montar-sacola/${selectedOrder?.id}/alterar`,
          modalComponent: RejectBagModal,
          modalDescription:
            "Ao alterar o status para pendente, a sacola deverá ser enviada novamente.",
          updateStatus: "PENDING",
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
          Conteúdo da sacola
        </span>
        <span className="mt-2 text-center text-sm font-medium text-slate-gray">
          {!selectedOrder ? "Sacola não encontrada" : statusContent.subtitle}
        </span>
      </div>
      {selectedOrder && (
        <div className="h-[calc(var(--min-page-height)-10.35rem)] w-full flex flex-col justify-between pb-6 gap-4">
          <BagMiniTable order={selectedOrder} />
          <statusContent.modalComponent
            openButton={statusContent.buttonTitle}
            button2={
              <UpdateOrderStatusButton
                orderId={selectedOrder.id}
                updateStatusTo={statusContent.updateStatus}
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
