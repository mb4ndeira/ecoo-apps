"use client";
import { ChartOptions } from "chart.js";
import "chartjs-plugin-datalabels";

import LineChart from "@/components/charts/LineChart";

export const WEEK_SALES = [
  {
    id: 1,
    day: "Domingo",
    sales: 22,
  },
  {
    id: 2,
    day: "Segunda",
    sales: 27,
  },
  {
    id: 3,
    day: "Terça",
    sales: 19,
  },
  {
    id: 4,
    day: "Quarta",
    sales: 33,
  },
  {
    id: 5,
    day: "Quinta",
    sales: 23,
  },
  {
    id: 6,
    day: "Sexta",
    sales: 25,
  },
  {
    id: 7,
    day: "Sabado",
    sales: 26,
  },
];

const userSalesData = WEEK_SALES.map((data) => data.sales);
const minValue = Math.min(...userSalesData);
const maxValue = Math.max(...userSalesData);

const chartData = {
  labels: WEEK_SALES.map((data) => data.day),
  datasets: [
    {
      label: "",
      data: userSalesData,
      borderColor: "#00735E",
      borderWidth: 5,
      pointRadius: 0,
      pointBackgroundColor: "#00735E",
      fill: true,
      backgroundColor: (context: any) => {
        if (!context.chart.chartArea) {
          return;
        }

        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;

        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, "#E1FEC6");
        gradientBg.addColorStop(0.8197, "rgba(225, 254, 198, 0.00)");

        return gradientBg;
      },
    },
  ],
};

let displayValue = true;

const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: (context: any) => {
        if (
          context.dataset.data[context.dataIndex] === minValue ||
          context.dataset.data[context.dataIndex] === maxValue
        ) {
          return true;
        } else {
          displayValue = false;
          return false;
        }
      },
      anchor: "center",
      align: (context: any) => {
        if (context.dataset.data[context.dataIndex] === minValue) {
          return "bottom";
        } else {
          return "top";
        }
      },
      offset: 8,
      color: "#00735E",
      backgroundColor: (context: any) => {
        if (context.dataset.data[context.dataIndex] === maxValue) {
          return "#EEF1F4";
        } else {
          return "#FFFFFF";
        }
      },
      borderRadius: 5,
      font: {
        size: 14,
        weight: "600",
      },
      formatter: function (value: number, context: any) {
        if (
          context.dataset.data[context.dataIndex] === minValue ||
          context.dataset.data[context.dataIndex] === maxValue
        ) {
          return value;
        } else {
          return "";
        }
      },
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
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

export function SalesChart({ suspended }: { suspended: boolean }) {
  return !suspended ? (
    <div>
      <h2 className="pb-2.5 text-base font-semibold">Vendas por dia</h2>
      <div className="min-h-[200px] rounded-md bg-white">
        <LineChart
          chartData={chartData}
          options={chartOptions as ChartOptions}
        />
      </div>
    </div>
  ) : (
    <div>
      <h2 className="w-max pb-2.5 text-base font-semibold">Vendas por dia</h2>
      <div className="w-full min-h-[200px] rounded-md bg-white" />
    </div>
  );
}
