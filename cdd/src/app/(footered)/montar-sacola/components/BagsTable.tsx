import ListOrdersTable from "@cdd/components/ListOrdersTable";

export default async function BagsTable() {
  const cycleId: string = "c6921915-db88-48fb-b944-719540110b05"; // TO-DO: Pegar do local storage

  // const fetchedPendingOrders: Order[] = await fetchListOrders(
  //   cycleId,
  //   "ALL",
  //   "PENDING"
  // );
  
  // const fetchedReadyOrders: Order[] = await fetchListOrders(
  //   cycleId,
  //   "ALL",
  //   "READY"
  // );

  const fetchedOrders = [] as any;

  const statusConfig = {
    buttonRoute: "montar-sacola",
    translation: { PENDING: "Montar", READY: "Pronta" },
    classNames: {
      PENDING: "bg-walnut-brown text-white",
      READY: "bg-theme-secondary",
    },
  };

  return <ListOrdersTable orders={fetchedOrders} statusConfig={statusConfig} />;
}
