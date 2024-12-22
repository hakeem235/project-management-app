"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Dummy data for projects and tasks
    setProjects([
      { id: 1, name: "Website Redesign", progress: 75 },
      { id: 2, name: "Mobile App Development", progress: 40 },
    ]);

    setTasks([
      { id: 1, name: "Finalize Wireframes", status: "Completed" },
      { id: 2, name: "API Integration", status: "In Progress" },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      {/* Projects Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-600">Progress: {project.progress}%</p>
              <div className="h-2 bg-gray-300 rounded mt-2">
                <div
                  className="h-full bg-blue-600 rounded"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Overview */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold text-gray-800">{task.name}</h3>
              <p className={`text-sm ${
                task.status === "Completed" ? "text-green-600" : "text-yellow-600"
              }`}>
                Status: {task.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}