const { default: Link } = require("next/link");

<nav className="bg-white shadow">
  <div className="container mx-auto flex justify-between items-center py-4">
    <Link href="/" className="text-blue-600 font-bold text-lg">Project Tracker</Link>
    <div className="flex space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <a href="/features" className="text-gray-700 hover:text-blue-600">Features</a>
      <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
      <a href="/admin" className="text-gray-700 hover:text-blue-600">Admin</a>
    </div>
  </div>
</nav>