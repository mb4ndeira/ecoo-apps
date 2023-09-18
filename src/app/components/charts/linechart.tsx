import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale, Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
Chart.register(...registerables);
Chart.register(CategoryScale);

type ChartData = {
  labels: any[];
  datasets: any[];
};

interface BarChartProps {
  chartData: ChartData;
  options?: any;
}

function LineChart({ chartData, options }: BarChartProps) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;
