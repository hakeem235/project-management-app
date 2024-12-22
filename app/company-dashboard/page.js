"use client";

import { Bar } from "react-chartjs-2";

export default function CompanyDashboard() {
  const chartData = {
    labels: ["Team A", "Team B", "Team C", "Team D"],
    datasets: [
      {
        label: "Project Progress (%)",
        data: [85, 60, 75, 40], // Example progress data
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Company Dashboard</h1>
          <p className="text-lg mt-2">
            Monitor your projects and team progress here.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Projects Overview</h2>
        <div className="bg-white shadow rounded p-6">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </section>
    </div>
  );
}