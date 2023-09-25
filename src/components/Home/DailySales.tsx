"use client";
import React, { useState } from "react";
import LineChart from "./charts/linechart";
import { UserData } from "./charts/linedata";
import "chartjs-plugin-datalabels";

export function DailySales() {
  const userSalesData = UserData.map((data) => data.sales);
  const minValue = Math.min(...userSalesData);
  const maxValue = Math.max(...userSalesData);

  const [userData] = useState({
    labels: UserData.map((data) => data.day),
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
  });

  let displayValue = true;

  const options = {
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
        //backgroundColor: "#EEF1F4",
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

  return (
    <div className="mt-5">
      <h3 className="text-base mobile:text-sm font-semibold ml-2 mb-2">
        Vendas por dia
      </h3>
      <div className="w-80 h-52 mobile:w-64 mobile:h-48 rounded-md bg-white">
        <LineChart chartData={userData} options={options} />
      </div>
    </div>
  );
}
