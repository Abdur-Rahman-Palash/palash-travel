
import { ChevronDown, ArrowRight } from 'lucide-react';
import makkahImg from '../assets/images/makkah-1.png';
import modinaImg from '../assets/images/modina.png';
import alakshaImg from '../assets/images/alaksha.png';
import medellinImg from '../assets/images/medellin.jpg';

export default function Hero({ 
  title = "Explore the World", 
  subtitle = "Over 35 years of Travel Service Experience – Journey With Us",
  backgroundImage = import.meta.env.BASE_URL + "images/shutterstock_1985513846-scaled.jpg",
  height = "h-screen",
  showScrollIndicator = true 
}) {

  // Helper for category images — prefer bundled imports when available, otherwise fallback to public folder
  const assets = {
    'makkah-1.png': makkahImg,
    'modina.png': modinaImg,
    'alaksha.png': alakshaImg,
    'medellin.jpg': medellinImg,
  };
  const img = (name) => assets[name] || import.meta.env.BASE_URL + "images/" + name;

  return (
    <>
      <section className={`relative ${height} w-full overflow-hidden`}>
        
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 animate-hero-zoom"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#222' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center container-custom text-white text-center px-4">
          <div className="max-w-3xl mx-auto animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-100 font-light">
              {subtitle}
            </p>
          </div>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-white" />
            </div>
          )}
        </div>
      </section>

      {/* Category Grid */}
      <div className={`relative w-full ${height} flex`} style={{ maxWidth: '100%' }}>
        <div className="flex flex-col sm:flex-row w-full h-full">

          {/* HAJJ */}
          <a href="/hajj" className="group relative w-full sm:w-1/4 h-64 sm:h-full block overflow-hidden">
            <img src={img("Makkah-1.png")} alt="Makkah" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 border border-transparent rounded-md px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-opacity-20 group-hover:border-white/20 group-hover:scale-105 animate-fadeInUp" style={{ minWidth: 220 }}>
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 group-hover:text-white font-sans tracking-widest text-center">HAJJ</span>
                <ArrowRight size={24} className="text-gray-700 group-hover:text-white" />
              </div>
            </div>
          </a>

          {/* UMRAH */}
          <a href="/umrah" className="group relative w-full sm:w-1/4 h-64 sm:h-full block overflow-hidden">
            <img src={img("modina.png")} alt="Umrah" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 border border-transparent rounded-md px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-opacity-20 group-hover:border-white/20 group-hover:scale-105 animate-fadeInUp" style={{ minWidth: 220 }}>
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 group-hover:text-white font-sans tracking-widest text-center">UMRAH</span>
                <ArrowRight size={24} className="text-gray-700 group-hover:text-white" />
              </div>
            </div>
          </a>

          {/* TOURS */}
          <a href="/tours" className="group relative w-full sm:w-1/4 h-64 sm:h-full block overflow-hidden">
            <img src={img("alaksha.png")} alt="Tours" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 border border-transparent rounded-md px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-opacity-20 group-hover:border-white/20 group-hover:scale-105 animate-fadeInUp" style={{ minWidth: 220 }}>
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 group-hover:text-white font-sans tracking-widest text-center">TOURS</span>
                <ArrowRight size={24} className="text-gray-700 group-hover:text-white" />
              </div>
            </div>
          </a>

          {/* FAN FAVOURITE */}
          <a href="/fan-favourite" className="group relative w-full sm:w-1/4 h-64 sm:h-full block overflow-hidden">
            <img src={img("medellin.jpg")} alt="Fan Favourite" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 border border-transparent rounded-md px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-opacity-20 group-hover:border-white/20 group-hover:scale-105 animate-fadeInUp" style={{ minWidth: 220 }}>
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 group-hover:text-white font-sans tracking-widest text-center">FAN FAVOURITE</span>
                <ArrowRight size={24} className="text-gray-700 group-hover:text-white" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </>
  );
}
