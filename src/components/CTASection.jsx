import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ 
  title = "What Are You Waiting For?",
  backgroundImage = import.meta.env.BASE_URL + "images/Makkah-1.png",
  heightClass = "h-[60vh] md:h-screen",
}) {
  return (
    <section
      className={`${heightClass} relative overflow-hidden text-white`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10 flex items-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h2>
         


          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg text-lg transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
