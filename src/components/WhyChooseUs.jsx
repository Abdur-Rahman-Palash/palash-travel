import { Award, Users, Clock, Shield, Globe, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Over three decades of trusted travel service excellence and expertise"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals committed to your spiritual journey"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive coverage and protection for all our travelers"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected with partners worldwide for seamless experiences"
    },
    {
      icon: Headphones,
      title: "Personal Guidance",
      description: "Customized packages tailored to your unique needs"
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Why Choose Us?</h2>
          <p className="section-subheading">
            We are your leading experts on Hajj, Umrah, and Islamic travel with a proven track record
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card p-6 md:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
