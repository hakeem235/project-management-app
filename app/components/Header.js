import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-600"><Link href="/">FlowTracker</Link></h1>
        <nav className="hidden md:flex">
          <Link href="/features" className="text-gray-700 p-4 hover:bg-green-100 hover:p-3 hover:rounded-md hover:text-green-600 mx-3">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 p-4 hover:bg-green-100 hover:p-3 hover:rounded-md hover:text-green-600 mx-3">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 p-4 hover:bg-green-100 hover:p-3 hover:rounded-md hover:text-green-600 mx-3">
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-700 p-4 hover:bg-green-100 hover:p-3 hover:rounded-md hover:text-green-600 mx-3"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}