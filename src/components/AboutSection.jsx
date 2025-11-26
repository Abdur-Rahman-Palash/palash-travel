import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    "Over 35 years of travel service excellence",
    "Thousands of satisfied pilgrims and travelers",
    "Expert local guides and coordinators",
    "24/7 customer support and assistance",
    "Fully insured and licensed operations",
    "Personalized package customization"
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop"
              alt="Dar El Salam Travel"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dar El Salam
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              With over 35 years of dedicated service, Dar El Salam Travel has established itself as a leading 
              provider of Hajj, Umrah, and Islamic travel experiences. Our commitment to excellence and customer 
              satisfaction has made us the trusted choice for thousands of pilgrims and travelers.
            </p>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              We believe that every journey should be transformative, whether spiritual or exploratory. Our expert 
              team works tirelessly to ensure every detail is perfect, from booking to return home.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
