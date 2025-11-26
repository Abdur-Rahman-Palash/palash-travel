import React, { useState } from 'react';

const colombiaInfo = {
  title: 'COLOMBIA',
  description:
    "Colombia, a South American gem, enchants with its diverse landscapes and lively culture. From the historic charm of Cartagena to the cosmopolitan pulse of Bogotá, the country offers a rich tapestry of experiences. Verdant Amazon rainforests, the majestic Andes, and pristine Caribbean coastlines add natural allure. Beyond its breathtaking scenery, Colombia’s heartbeat is felt in its vibrant festivals, lively music, and flavorful cuisine. When traveling in a Muslim group, you can enjoy the country’s rich heritage, halal dining options, and a supportive environment for religious practices.",
  packages: [
    'Bogota',
    'Medellin',
    'Guatape',
    'Cartagena',
    'Rosario islands',
  ],
  travelDates: 'December 25, 2025 – January 4, 2026',
  partner: 'Ustadha Fatima Lette',
  contact: {
    phone: '(866)327-7252',
    email: 'To***@********am.com',
  },
  morePlaces: {
    Africa: ['Egypt', 'Kenya', 'Morocco'],
    Asia: ['China', 'Japan', 'Pakistan', 'South Korea', 'Uzbekistan'],
    MiddleEast: ['Iran', 'Jordan (Coming Soon)', 'Palestine', 'Saudi Arabia'],
    Americas: ['Alaska Cruise', 'Colombia', 'Costa Rica', 'Peru'],
    Europe: ['Bosnia & Herzegovina', 'Sicily', 'Turkey', 'Spain'],
  },
};

export default function FanFavourite() {
  const [showInfo, setShowInfo] = useState(false);

  // Helper: Correct Vite image loader
  const img = (name) => import.meta.env.BASE_URL + "images/" + name;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image and Button */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden flex items-center justify-center">
        <img
          src={img("medellin.jpg")}
          alt="Colombia Heritage Tour"
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <button
            className="px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg bg-blue-500 hover:bg-blue-600 transition-all animate-bounce"
            onClick={() => setShowInfo(true)}
          >
            Fan Favourite
          </button>
        </div>
      </section>

      {/* Animated Info Section */}
      {showInfo && (
        <section className="animate-fadeInUp py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-wide drop-shadow-lg">{colombiaInfo.title}</h1>
            <p className="text-gray-800 text-xl md:text-2xl mb-8 font-medium leading-relaxed drop-shadow-md">
              {colombiaInfo.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span>Why Choose Us?</span>
                </h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2"><span>👥</span> Empowering you through shared learning experiences</li>
                  <li className="flex items-center gap-2"><span>🌸</span> Discover the joy of traveling with like-minded Muslims</li>
                  <li className="flex items-center gap-2"><span>🥾</span> Nurture your soul through adventure and discovery</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">Travel Packages</h2>
                <ul className="flex flex-wrap justify-center gap-3 text-lg text-blue-700 font-semibold">
                  {colombiaInfo.packages.map((pkg) => (
                    <li key={pkg} className="bg-blue-100 px-4 py-2 rounded-lg shadow">{pkg}</li>
                  ))}
                </ul>
                <div className="mt-4 text-gray-700 text-base">Explore Colombia with Qalam Sisters’ Suhbah</div>
              </div>
            </div>
            <div className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-blue-700">Travel Dates:</span> {colombiaInfo.travelDates}
            </div>
            <div className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-blue-700">Partner:</span> {colombiaInfo.partner}
            </div>
            <div className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-blue-700">Contact:</span> <a href="tel:+18663277252" className="text-blue-500 underline">{colombiaInfo.contact.phone}</a> | <a href="mailto:{colombiaInfo.contact.email}" className="text-blue-500 underline">{colombiaInfo.contact.email}</a>
            </div>
            <div className="mb-8">
              <a
                href="#book"
                className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#2EA3F2' }}
              >
                BOOK NOW
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded-lg font-bold text-blue-700 text-lg shadow-lg border-2 border-blue-300 ml-4 transition-all hover:bg-blue-50 hover:scale-105"
              >
                Contact Us For More Information
              </a>
            </div>
            <div className="mt-10 text-left">
              <h2 className="text-xl font-bold text-blue-700 mb-2">More Places</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(colombiaInfo.morePlaces).map(([region, places]) => (
                  <div key={region}>
                    <span className="font-semibold text-gray-800">{region}</span>
                    <ul className="list-disc list-inside text-gray-700">
                      {places.map((place) => (
                        <li key={place}>{place}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
