import React from "react";
import { useLocation } from "react-router-dom";

// Helper: Correct Vite image loader
const img = (file) => import.meta.env.BASE_URL + "images/" + file;

const sections = [
  {
    title: "Spiritual Preparation",
    text: "Prepare your heart and mind for the sacred journey of Umrah. Our guides help you understand the rituals and significance.",
    image: img("Makkah-1.png"),
  },
  {
    title: "Travel Planning",
    text: "We assist you in planning flights, accommodation, and transportation for a smooth experience.",
    image: img("modina-gate.jpg"),
  },
  {
    title: "Group Support",
    text: "Travel with a supportive group and benefit from shared learning and companionship.",
    image: img("manus.jpg"),
  },
  {
    title: "Halal Dining",
    text: "Enjoy delicious halal meals throughout your journey, with options for every taste.",
    image: img("pack.jpg"),
  },
  {
    title: "Guided Rituals",
    text: "Our experienced guides will walk you through every step of the Umrah rituals.",
    image: img("nusuk.jpg"),
  },
  {
    title: "Cultural Discovery",
    text: "Explore the rich history and culture of the holy cities with curated tours.",
    image: img("medellin.jpg"),
  },
  {
    title: "Personalized Service",
    text: "We tailor your Umrah experience to your needs, ensuring comfort and peace of mind.",
    image: img("hat-tula.jpg"),
  },
];

export default function Umrah() {
  const location = useLocation();
  const is2026 = location.pathname.includes("2026");

  return (
    <div>
      {/* HERO IMAGE */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden flex items-center justify-center">
        <img
          src={is2026 ? img("modina.png") : img("Makkah-1.png")}
          alt={is2026 ? "Umrah 2026" : "Umrah 2025"}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            {is2026 ? "UMRAH 2026" : "UMRAH 2025"}
          </h1>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom max-w-6xl mx-auto space-y-16">
          {sections.map((sec, idx) => (
            <div
              key={sec.title}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 animate-fadeInUp`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div className="md:w-1/2 w-full text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                  {sec.title}
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {sec.text}
                </p>

                <a
                  href="#plan"
                  className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: "#2EA3F2" }}
                >
                  Plan Your Trip
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
