export default function Hero() {
    return (
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold">
            Simplify Your Workflow, Boost Your Productivity
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Manage projects, track progress, and empower your team with FlowTracker.
          </p>
          <div className="mt-8">
            <a className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg shadow-md mr-4 hover:bg-gray-200 transition duration-300">
              Try for Free
            </a>
            <a href="/features" className="bg-green-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }