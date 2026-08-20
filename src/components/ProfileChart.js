import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registers the parts needed for a bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfileChart = ({ matches }) => {
  // Counts how many selected profiles are Players or DMs
  const roleCounts = matches.reduce((counts, profile) => {
    counts[profile.role] = (counts[profile.role] || 0) + 1;
    return counts;
  }, {});

  const data = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: "Selected Profiles",
        data: Object.values(roleCounts),
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: "Selected Profiles by Role",
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProfileChart;