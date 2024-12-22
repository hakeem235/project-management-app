import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6"><Link href="/" className="hover:text-gray-400">Project Manager</Link></h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
                        </li>
                        <li className="mb-4">
                            <a href="/dashboard/projects" className="hover:text-gray-400">Projects</a>
                        </li>
                        <li className="mb-4">
                            <a href="/dashboard/tasks" className="hover:text-gray-400">Tasks</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}