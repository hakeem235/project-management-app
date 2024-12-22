import Footer from "../components/Footer";
import Header from "../components/Header";

export default function FeaturesPage() {
    return (
      <div>
        <Header />
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Features</h1>
            <p className="text-lg mb-6">
              Explore the powerful features that make Project Tracker the ultimate tool for managing your projects.
            </p>
          </div>
        </section>
  
        {/* Features Overview */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/task-management-icon.png"
                    alt="Task Management"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Task Management</h3>
                <p className="text-gray-600">
                  Organize your tasks efficiently with our intuitive task management system.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/collaboration-icon.png"
                    alt="Collaboration"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Enhance teamwork with seamless collaboration tools and real-time updates.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/reporting-icon.png"
                    alt="Advanced Reporting"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Reporting</h3>
                <p className="text-gray-600">
                  Gain valuable insights with detailed reports and analytics.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/integration-icon.png"
                    alt="Third-Party Integrations"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Third-Party Integrations</h3>
                <p className="text-gray-600">
                  Connect with your favorite tools and streamline workflows.
                </p>
              </div>
              {/* Feature 5 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/calendar-icon.png"
                    alt="Calendar Integration"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Calendar Integration</h3>
                <p className="text-gray-600">
                  Keep track of deadlines and schedules with calendar sync.
                </p>
              </div>
              {/* Feature 6 */}
              <div className="p-6 bg-white rounded shadow text-center">
                <div className="mb-4">
                  <img
                    src="/images/notifications-icon.png"
                    alt="Real-Time Notifications"
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-Time Notifications</h3>
                <p className="text-gray-600">
                  Stay updated with instant notifications on task updates and deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey Today!</h2>
            <p className="text-lg mb-6">
              Experience the full power of Project Tracker by signing up now.
            </p>
            <a
              href="/dashboard"
              className="bg-white text-green-600 px-6 py-3 rounded font-semibold"
            >
              Get Started
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  }