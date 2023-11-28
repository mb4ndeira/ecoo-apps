import React from "react";
import { Line } from "react-chartjs-2";
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

function LineChart({
  chartData,
  options,
}: {
  chartData: ChartData<"line">;
  options?: ChartOptions;
}) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;
