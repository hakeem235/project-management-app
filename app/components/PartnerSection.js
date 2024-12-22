export default function PartnerSection() {
    const partners = [
      { id: 1, name: "TechCorp", logo: "/images/techcorp-logo.png" },
      { id: 2, name: "DevSolutions", logo: "/images/devsolutions-logo.png" },
      { id: 3, name: "CloudBase", logo: "/images/cloudbase-logo.png" },
      { id: 4, name: "DesignHub", logo: "/images/designhub-logo.png" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
          <p className="text-gray-600 mb-12">
            We collaborate with some of the best companies to bring you seamless project management solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="h-16 mb-4"
                />
                <h3 className="text-gray-700 text-sm font-medium">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }