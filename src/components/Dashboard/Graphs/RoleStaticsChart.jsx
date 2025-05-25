import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
function RoleStaticsChart({data}) {
   const chartData = {
    labels: data.map((d) => d.role),
    datasets: [
      {
        label: "Active Users",
        data: data.map((d) => d.count),
        backgroundColor: "#fe7467", 
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
     animation: {
      duration: 1000, 
      easing: "easeOutQuart", 
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;

}

export default RoleStaticsChart