"use client";

import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Finalize Wireframes",
      status: "Completed",
      startDate: "2024-12-10",
      endDate: "2024-12-15",
    },
    {
      id: 2,
      name: "API Integration",
      status: "In Progress",
      startDate: "2024-12-12",
      endDate: "2024-12-20",
    },
    {
      id: 3,
      name: "Set Up Database",
      status: "Pending",
      startDate: "2024-12-18",
      endDate: "2024-12-25",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskStartDate, setNewTaskStartDate] = useState("");
  const [newTaskEndDate, setNewTaskEndDate] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName.trim() === "") {
      alert("Task name is required!");
      return;
    }
    if (newTaskStartDate === "" || newTaskEndDate === "") {
      alert("Start Date and End Date are required!");
      return;
    }
    if (new Date(newTaskStartDate) > new Date(newTaskEndDate)) {
      alert("End Date must be later than Start Date!");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
      status: "Pending",
      startDate: newTaskStartDate,
      endDate: newTaskEndDate,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskName("");
    setNewTaskDescription("");
    setNewTaskStartDate("");
    setNewTaskEndDate("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tasks</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              <h2 className="text-lg font-bold text-gray-800">{task.name}</h2>
              <p>
                Status: <sapn className={`text-sm ${task.status === "Completed"
                  ? "text-green-600"
                  : task.status === "In Progress"
                    ? "text-yellow-600"
                    : "text-gray-600"
                  }`}>{task.status}</sapn>
              </p>
              <p className="text-sm text-gray-600">
                Start Date: {task.startDate}
              </p>
              <p className="text-sm text-gray-600">End Date: {task.endDate}</p>
            </div>

            <div>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
                className="p-2 border rounded mt-2"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-lg w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Task Name
                </label>
                <input
                  type="text"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter task name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Description
                </label>
                <textarea
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter task description"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={newTaskStartDate}
                  onChange={(e) => setNewTaskStartDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={newTaskEndDate}
                  onChange={(e) => setNewTaskEndDate(e.target.value)}
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
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}