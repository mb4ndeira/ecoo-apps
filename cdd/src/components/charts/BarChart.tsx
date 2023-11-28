import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  registerables,
  ChartData,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
Chart.register(...registerables);
Chart.register(CategoryScale);

function BarChart({
  chartData,
  options,
}: {
  chartData: ChartData<"bar">;
  options?: ChartOptions;
}) {
  return <Bar data={chartData} options={options} />;
}

export default BarChart;
