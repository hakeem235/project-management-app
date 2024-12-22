import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
    return (
      <div>
        <Header />
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">
              Learn more about our journey, mission, and the team behind Project Tracker.
            </p>
          </div>
        </section>
  
        {/* Mission Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Project Tracker, our mission is to simplify project management and help teams
              achieve their goals with efficiency and ease. We are committed to delivering
              intuitive tools that empower teams of all sizes to collaborate and succeed.
            </p>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="p-6 bg-gray-50 rounded shadow">
                <img
                  src="/images/team-member-1.jpg"
                  alt="Team Member 1"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="p-6 bg-gray-50 rounded shadow">
                <img
                  src="/images/team-member-2.jpg"
                  alt="Team Member 2"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                <p className="text-gray-600">Head of Product</p>
              </div>
              {/* Team Member 3 */}
              <div className="p-6 bg-gray-50 rounded shadow">
                <img
                  src="/images/team-member-3.jpg"
                  alt="Team Member 3"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Emily Clark</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly strive to create cutting-edge tools for project management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We believe teamwork is the key to success, and we build tools that reflect this.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Honesty and transparency are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }