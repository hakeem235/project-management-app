"use client";

import { useRouter } from "next/navigation";

export default function TaskDetails({ params }) {
  const { id } = params;
  const router = useRouter();

  // Dummy data for demonstration
  const task = {
    id,
    name: "Finalize Wireframes",
    description: "Complete the wireframes for the homepage and dashboard.",
    status: "Completed",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Details</h1>
      <p>
        <strong>Task Name:</strong> {task.name}
      </p>
      <p className="mt-2">
        <strong>Description:</strong> {task.description}
      </p>
      <p className="mt-2">
        <strong>Status:</strong> {task.status}
      </p>
      <button
        onClick={() => router.push("/dashboard/tasks")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Tasks
      </button>
    </div>
  );
}