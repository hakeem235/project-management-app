"use client";

import { useRouter } from "next/navigation";

export default function ProjectDetails({ params }) {
  const { id } = params;
  const router = useRouter();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Project Details</h1>
      <p>Viewing project with ID: {id}</p>
      <button
        onClick={() => router.push("/dashboard/projects")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Projects
      </button>
    </div>
  );
}