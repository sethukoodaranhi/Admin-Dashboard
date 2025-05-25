import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function RegistrationStaticsChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: 'Registrations',
        data: data.map((d) => d.registrations),
        fill: false,
        borderColor: '#4f46e5',
        backgroundColor: '#4f46e5',
        tension: 0.4, 
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default RegistrationStaticsChart;
