import ListOrdersTable from "@cdd/components/ListOrdersTable";
import { Order } from "@shared/domain/use-cases/list-orders";

import { fetchListOrdersAllPages } from "@cdd/app/_actions/fetch-list-orders";

export default async function SendBagTable() {
  const cycleId: string = "c6921915-db88-48fb-b944-719540110b05"; // TO-DO: Pegar do local storage

  const fetchedReadyOrders: Order[] = await fetchListOrdersAllPages(
    cycleId,
    "READY"
  );
  const fetchedDispatchedPendingOrders: Order[] = await fetchListOrdersAllPages(
    cycleId,
    "DISPATCHED"
  );

  const fetchedOrders: Order[] = [...fetchedReadyOrders, ...fetchedDispatchedPendingOrders];

  const statusConfig = {
    buttonRoute: "enviar-sacola",
    translation: { DISPATCHED: "Enviada", READY: "Enviar" },
    classNames: {
      DISPATCHED: "bg-theme-secondary",
      READY: "bg-walnut-brown text-white",
    },
  };

  return <ListOrdersTable orders={fetchedOrders} statusConfig={statusConfig} />;
}
