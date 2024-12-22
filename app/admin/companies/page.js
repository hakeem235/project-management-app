"use client";

import { useState } from "react";

export default function AdminCompanyManagement() {
  const [companies, setCompanies] = useState([
    { id: 1, name: "Tech Corp", teams: 5, projects: 10 },
    { id: 2, name: "Build Solutions", teams: 3, projects: 6 },
  ]);

  const [newCompany, setNewCompany] = useState({ name: "", teams: 0, projects: 0 });

  const addCompany = () => {
    setCompanies([
      ...companies,
      { id: companies.length + 1, ...newCompany },
    ]);
    setNewCompany({ name: "", teams: 0, projects: 0 });
  };

  const deleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Admin: Manage Companies</h1>
          <p className="text-lg mt-2">
            Add, edit, and manage companies using our service.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Registered Companies</h2>
        <div className="bg-white shadow rounded p-6">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">ID</th>
                <th className="py-2">Name</th>
                <th className="py-2">Teams</th>
                <th className="py-2">Projects</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id} className="border-t">
                  <td className="py-2">{company.id}</td>
                  <td className="py-2">{company.name}</td>
                  <td className="py-2">{company.teams}</td>
                  <td className="py-2">{company.projects}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteCompany(company.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Add New Company</h2>
        <form
          className="bg-white shadow rounded p-6"
          onSubmit={(e) => {
            e.preventDefault();
            addCompany();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={newCompany.name}
              onChange={(e) =>
                setNewCompany({ ...newCompany, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Teams
            </label>
            <input
              type="number"
              value={newCompany.teams}
              onChange={(e) =>
                setNewCompany({ ...newCompany, teams: +e.target.value })
              }
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of teams"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Projects
            </label>
            <input
              type="number"
              value={newCompany.projects}
              onChange={(e) =>
                setNewCompany({ ...newCompany, projects: +e.target.value })
              }
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of projects"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            Add Company
          </button>
        </form>
      </section>
    </div>
  );
}