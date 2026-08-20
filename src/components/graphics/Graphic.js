import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
 
import { Radar } from "react-chartjs-2";
 
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
 
function Graphics({ preferences }) {
  const data = {
    labels: [
      "Roleplay",
      "Combat",
      "Exploration",
      "Strategy",
      "Social"
    ],
    datasets: [
      {
        label: "Playstyle",
        data: [
          preferences.roleplay,
          preferences.combat,
          preferences.exploration,
          preferences.strategy,
          preferences.social
        ],
 
        // Makes the actual player shape easy to see
        backgroundColor: "rgba(255, 165, 0, 0.30)",
        borderColor: "#ffb000",
        borderWidth: 3,
 
        // Makes each data point visible
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#ffb000",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };
 
  const options = {
    responsive: true,
 
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 14,
            weight: "bold"
          }
        }
      }
    },
 
    scales: {
      r: {
        min: 0,
        max: 5,
 
        ticks: {
          stepSize: 1,
          color: "#ffffff",
          backdropColor: "rgba(0, 0, 0, 0.6)",
          font: {
            size: 12,
            weight: "bold"
          }
        },
 
        pointLabels: {
          color: "#ffffff",
          font: {
            size: 14,
            weight: "bold"
          }
        },
 
        grid: {
          color: "rgba(255, 255, 255, 0.35)"
        },
 
        angleLines: {
          color: "rgba(255, 255, 255, 0.35)"
        }
      }
    }
  };
 
  return (
<div className="playstyle-chart">
<h2>Playstyle Preferences</h2>
<Radar data={data} options={options} />
</div>
  );
}
 
export default Graphics;