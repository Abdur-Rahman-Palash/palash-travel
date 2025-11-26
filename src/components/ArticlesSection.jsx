import React from 'react';

// Helper function for image paths
const img = (name) => import.meta.env.BASE_URL + "images/" + name;

const articles = [
  {
    id: 1,
    title: 'How to Register on Nusuk for Hajj 2026',
    image: img("wall.jpg"),
    summary: 'How to Register on Nusuk for Hajj 2026 If you are planning to go to Hajj 2026 from the United States, Canada, Europe, Australia, or any of the 126 approved countries, you must first register on the official Nusuk Hajj platform and you must also purchase your package...'
  },
  {
    id: 2,
    title: 'A Traveler’s Guide to VAT Refunds in Saudi Arabia',
    image: img("vat.jpg"),
    summary: 'Returning Home with Barakah: A Traveler’s Guide to VAT Refunds in Saudi ArabiaThere’s a special feeling that comes with leaving Saudi Arabia after Umrah or a blessed visit, the scent of oud still on your clothes, a few dates tucked into your bag, and a heart that...'
  },
  {
    id: 3,
    title: 'Embracing the Journey Ahead',
    image: img("hat-tula.jpg"),
    summary: ' Embracing the Journey Ahead Before exploring the various packages, it’s essential to assess your specific requirements. Your personal preferences—such as travel dates, accommodation preferences, and mobility considerations—will serve as the foundation for selecting...'
  },
  {
    id: 4,
    title: 'Cultural Etiquette When Traveling Abroad',
    image: img("modina-gate.jpg"),
    summary: 'Learn the dos and don’ts to respect local cultures during your travels.'
  },
  {
    id: 5,
    title: 'Packing Essentials for Every Traveler',
    image: img("manus.jpg"),
    summary: 'A checklist of must-have items to pack for any trip.'
  },
  {
    id: 6,
    title: 'Best Halal Food Spots Around the World',
    image: img("medellin.jpg"),
    summary: 'Explore delicious halal food options in different countries.'
  },
  {
    id: 7,
    title: 'Travel Insurance: What You Need to Know',
    image: img("pack.jpg"),
    summary: 'Understand the importance of travel insurance and how to choose the right plan.'
  },
  {
    id: 8,
    title: 'Solo Travel: Safety and Inspiration',
    image: img("nusuk.jpg"),
    summary: 'Tips and inspiration for those considering a solo adventure.'
  }
];

export default function ArticlesSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Latest Articles</h2>
          <p className="section-subheading">Travel tips, inspiration, and guides for your next journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {articles.map(article => (
            <div key={article.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col w-full sm:w-[320px] md:w-[320px] lg:w-[340px]">
              <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
