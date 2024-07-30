"use client";
import CardComponent from "./CardComponent";
import { useCycleProvider } from "@shared/context";

export default function ReportCardComponent() {
  const { cycle } = useCycleProvider();

  return (
    <CardComponent
      title="Enviar sacola"
      link={
        process.env.NEXT_PUBLIC_API_URL +
        "/deliveries/report?cycle_id=" +
        cycle?.id
      }
    />
  );
}
