import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sakib & Kiran",
      text: "On behalf of me and my wife, I would like to first ask Allah swt to accept our hajj and yours Ameen. We also want to thank the wonderful staff at Dar El Salam for their amazing coordination and hospitality. This has been a very memorable and special journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Hassan & Najua",
      text: "Alhamdulilah Mukhtar & I have returned home safe and sound. I want to convey my thanks to Dar El Salam as a whole, all the workers behind the scenes who made this Hajj logistically possible and comfortable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Saima Mukhtar",
      text: "Jazak Allah Khair Saif and Dar El Salaam team. Words cannot describe how you have taken care of us and all our needs during this memorable hajj journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Fairoze Poona",
      text: "Thanks Br Rafat, Sr Rahima, Br Arif and all the DST team. It was great meeting everyone in the group. May Allah accept everyone's Hajj and Ibada.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return [testimonials[currentIndex]];
  };

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeIn transition-opacity duration-700">
          <h2 className="section-heading text-gray-900">What Our Travelers Say</h2>
          <p className="section-subheading text-gray-700">
            Real experiences from our valued customers who have journeyed with us
          </p>
        </div>
    


        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex justify-center">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="card p-6 md:p-8 bg-white hover:shadow-xl transition-all duration-300 animate-slideUp"
              >
                {/* Heart Icon Centered */}
                <div className="flex justify-center mb-4">
                  <Heart size={40} className="text-red-500 fill-red-500" />
                </div>

                {/* Quote */}
                <p className="text-gray-800 mb-6 italic leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author Name Only */}
                <div className="flex justify-center pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
