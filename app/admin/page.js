"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function AdminPage() {
  // Dummy Data for Dashboard
  const [teams, setTeams] = useState(10); // Total teams
  const [projects, setProjects] = useState(25); // Total projects

  // Chart Data
  const chartData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Projects Status",
        data: [10, 8, 7], // Example data
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        borderWidth: 1,
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
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-lg mt-2">
            Configure company needs and monitor your projects and teams.
          </p>
        </div>
      </section>

      {/* Dashboard Metrics */}
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Total Teams */}
          <div className="p-6 bg-white shadow rounded text-center">
            <h2 className="text-xl font-bold text-gray-800">Total Teams</h2>
            <p className="text-4xl font-bold text-blue-600 mt-4">{teams}</p>
          </div>
          {/* Total Projects */}
          <div className="p-6 bg-white shadow rounded text-center">
            <h2 className="text-xl font-bold text-gray-800">Total Projects</h2>
            <p className="text-4xl font-bold text-blue-600 mt-4">{projects}</p>
          </div>
        </div>
      </section>

      {/* Projects Chart */}
      <section className="container mx-auto py-8">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Projects Overview
          </h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </section>

      {/* Admin Configuration Form */}
      <section className="container mx-auto py-8">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Configure Company Needs
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Add Teams
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of teams"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Add Projects
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of projects"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
            >
              Save Configuration
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}