import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import { Award, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional travel experiences that combine spiritual fulfillment with cultural enrichment, making pilgrimage and travel accessible and memorable for everyone."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We are committed to excellence, integrity, customer satisfaction, and creating lasting relationships with our clients. Every journey matters to us."
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To be the most trusted and respected travel company in the Islamic travel industry, known for quality, reliability, and genuine care for our travelers."
    }
  ];

  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Your trusted partner for over 35 years"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
        height="h-96"
        showScrollIndicator={false}
      />

      {/* Company Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 text-base md:text-lg">
              <p>
                Founded over 35 years ago, Dar El Salam Travel began with a simple vision: to make pilgrimage 
                and travel accessible to everyone. What started as a small family business has grown into a 
                leading provider of Hajj, Umrah, and Islamic travel experiences.
              </p>
              <p>
                Our commitment to excellence, attention to detail, and genuine care for our travelers has earned 
                us the trust of thousands of pilgrims and tourists. Every year, we help families and individuals 
                embark on life-changing journeys.
              </p>
              <p>
                Today, Dar El Salam stands as a beacon of reliability and professionalism in the travel industry, 
                with partnerships worldwide and a team of dedicated professionals committed to making your journey unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                      <Icon size={40} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Why Trust Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "35+", label: "Years Experience" },
              { number: "10,000+", label: "Happy Travelers" },
              { number: "50+", label: "Expert Staff" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Hajj Packages",
                desc: "Comprehensive Hajj packages with expert guidance and all-inclusive amenities"
              },
              {
                title: "Umrah Services",
                desc: "Flexible Umrah packages from budget-friendly to luxury experiences"
              },
              {
                title: "Tours & Expeditions",
                desc: "Cultural and religious tours across the Middle East and beyond"
              },
              {
                title: "Group Travel",
                desc: "Customized group packages for organizations, mosques, and associations"
              },
              {
                title: "Visa Assistance",
                desc: "Expert support with all visa documentation and processing"
              },
              {
                title: "Travel Insurance",
                desc: "Comprehensive coverage options for peace of mind"
              }
            ].map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Journey?"
        subtitle="Let our experts help you create an unforgettable experience"
        primaryText="Contact Us Today"
        primaryLink="/contact"
      />
    </div>
  );
}
