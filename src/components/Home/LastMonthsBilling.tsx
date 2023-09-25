"use client";
import { useState } from "react";
import { UserData } from "./charts/bardata";
import BarChart from "./charts/barchart";

export function LastMonthsBilling() {
  const [userData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: UserData.map((data) => data.billing),
        backgroundColor: ["#9BA5B7", "#9BA5B7", "#9BA5B7", "#00735E"],
        borderWidth: 0,
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  });

  const options = {
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

  return (
    <div className="mt-5 ">
      <h3 className="text-base mobile:text-sm font-semibold ml-2 mb-2">
        Faturamento dos últimos meses
      </h3>
      <div className="w-80 h-52 mobile:w-64 mobile:h-48 rounded-md bg-white">
        <BarChart chartData={userData} options={options} />
      </div>
    </div>
  );
}
