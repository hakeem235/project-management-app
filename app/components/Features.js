export default function Features() {
    return (
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800">Core Features</h3>
          <p className="text-gray-600 mt-4">
            Explore the tools that make project management seamless.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-green-600">Task Management</h4>
              <p className="mt-2 text-gray-600">
                Easily create, assign, and manage tasks for your team.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-green-600">Time Tracking</h4>
              <p className="mt-2 text-gray-600">
                Track your work hours and meet deadlines effortlessly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-green-600">Collaboration</h4>
              <p className="mt-2 text-gray-600">
                Communicate and collaborate with your team in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }