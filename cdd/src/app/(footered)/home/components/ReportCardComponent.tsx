"use client";
import { useCycleProvider } from "@shared/context";

import CardComponent from "./CardComponent";

export function ReportCardComponent() {
  const { cycle } = useCycleProvider();

  return (
    <CardComponent
      title="Gerar relatório"
      link={`/api/reports/delivery?cycle_id=${cycle?.id}`}
    />
  );
}
