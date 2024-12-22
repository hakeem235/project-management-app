export default function PricingSection() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Plans</h2>
          <p className="text-gray-600 mb-12">
            Choose a plan that fits your needs and start managing your projects today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Free Plan</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">$0 / month</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✔ Up to 5 projects</li>
                <li>✔ Basic task tracking</li>
                <li>✔ Email support</li>
              </ul>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Get Started
              </button>
            </div>
  
            {/* Pro Plan */}
            <div className="bg-green-600 text-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Pro Plan</h3>
              <p className="text-2xl font-bold mb-4">$15 / month</p>
              <ul className="space-y-2 mb-6">
                <li>✔ Unlimited projects</li>
                <li>✔ Advanced task tracking</li>
                <li>✔ Priority support</li>
              </ul>
              <button className="bg-white text-green-600 px-4 py-2 rounded">
                Choose Plan
              </button>
            </div>
  
            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Enterprise Plan
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">Custom Pricing</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✔ Scalable solutions</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Custom integrations</li>
              </ul>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }