"use client";
import { ChartOptions } from "chart.js";

import BarChart from "@/components/charts/BarChart";

export const MONTHLY_BILLINGS = [
  {
    id: 1,
    month: "Maio",
    billing: 2987,
  },
  {
    id: 2,
    month: "Junho",
    billing: 3852,
  },
  {
    id: 3,
    month: "Julho",
    billing: 3223,
  },
  {
    id: 4,
    month: "Agosto",
    billing: 1893,
  },
];

const chartData = {
  labels: MONTHLY_BILLINGS.map((data) => data.month),
  datasets: [
    {
      label: "",
      data: MONTHLY_BILLINGS.map((data) => data.billing),
      backgroundColor: ["#9BA5B7", "#9BA5B7", "#9BA5B7", "#00735E"],
      borderWidth: 0,
      borderRadius: 5,
      barThickness: 40,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: function (context: any) {
        return context.dataIndex === 3;
      },
      anchor: "center",
      align: "top",
      offset: 45,
      color: "#00735E",
      backgroundColor: "#EEF1F4",
      borderRadius: 5,
      font: {
        size: 14,
        weight: "600",
      },
      formatter: function (value: number) {
        return `R$${value}`;
      },
      className: "custom-datalabel",
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1000,
        callback: function (value: number) {
          return `R$${(value / 1000).toFixed(0)}k`;
        },
      },
    },
  },
  offset: true,
  layout: {
    padding: {
      top: 20,
      bottom: 20,
      left: 10,
      right: 10,
    },
  },
  maintainAspectRatio: false,
};

export function BillingChart({ suspended }: { suspended: boolean }) {
  const userData = chartData;

  return !suspended ? (
    <div>
      <h2 className="pb-2.5 text-base font-semibold">
        Faturamento dos últimos meses
      </h2>
      <div className="w-full min-h-[200px] rounded-md bg-white">
        <BarChart chartData={userData} options={chartOptions as ChartOptions} />
      </div>
    </div>
  ) : (
    <div>
      <h2 className="w-max pb-2.5 text-base font-semibold">
        Faturamento dos últimos meses
      </h2>
      <div className="w-full min-h-[200px] rounded-md bg-white" />
    </div>
  );
}
