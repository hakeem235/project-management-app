"use client";

import { useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Revamping the company website with modern UI/UX.",
      startDate: "2024-12-01",
      endDate: "2025-01-31",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Creating a cross-platform app for client engagement.",
      startDate: "2024-11-15",
      endDate: "2025-02-28",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [newProjectStartDate, setNewProjectStartDate] = useState("");
  const [newProjectEndDate, setNewProjectEndDate] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();

    if (newProjectName.trim() === "") {
      alert("Project name is required!");
      return;
    }
    if (newProjectStartDate === "" || newProjectEndDate === "") {
      alert("Start Date and End Date are required!");
      return;
    }
    if (new Date(newProjectStartDate) > new Date(newProjectEndDate)) {
      alert("End Date must be later than Start Date!");
      return;
    }

    const newProject = {
      id: projects.length + 1,
      name: newProjectName,
      description: newProjectDescription,
      startDate: newProjectStartDate,
      endDate: newProjectEndDate,
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
    setNewProjectName("");
    setNewProjectDescription("");
    setNewProjectStartDate("");
    setNewProjectEndDate("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Project
      </button>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold text-gray-800">{project.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600">
              Start Date: {project.startDate}
            </p>
            <p className="text-sm text-gray-600">End Date: {project.endDate}</p>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-lg w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Add New Project
            </h2>
            <form onSubmit={handleAddProject}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter project name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Description
                </label>
                <textarea
                  value={newProjectDescription}
                  onChange={(e) => setNewProjectDescription(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter project description"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={newProjectStartDate}
                  onChange={(e) => setNewProjectStartDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={newProjectEndDate}
                  onChange={(e) => setNewProjectEndDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}