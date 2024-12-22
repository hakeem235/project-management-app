import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";

export default function PricingPage() {
  return (
    <div>
        <Header />
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
          <p className="text-lg mb-6">
            Flexible pricing to suit all needs. Choose a plan and start managing your projects efficiently.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQs Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2">What is included in the Free Plan?</h3>
              <p className="text-gray-600">
                The Free Plan includes up to 5 projects, basic task tracking, and email support. Its perfect for small teams or individuals starting out.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription anytime without any penalties. Youll retain access to your account until the end of the billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Do you offer custom plans for enterprises?</h3>
              <p className="text-gray-600">
                Yes, we offer custom plans tailored to the needs of large organizations. Contact our sales team for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded shadow">
              <p className="text-gray-600 mb-4">
                “This app has transformed the way we manage our projects. The Pro Plan is worth every penny!”
              </p>
              <h3 className="font-bold text-gray-800">- Alex M., Project Manager</h3>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <p className="text-gray-600 mb-4">
                “We love the flexibility of the plans. Its easy to scale up as our needs grow.”
              </p>
              <h3 className="font-bold text-gray-800">- Sarah L., Startup Founder</h3>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <p className="text-gray-600 mb-4">
                “The customer support is fantastic! They helped us set up a custom enterprise plan.”
              </p>
              <h3 className="font-bold text-gray-800">- Michael T., CTO</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}