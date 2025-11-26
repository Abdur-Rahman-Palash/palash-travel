export default function Hajj() {

  // Helper function to load images correctly (works in Vite)
  const img = (name) => import.meta.env.BASE_URL + "images/" + name;

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src={img("Makkah-1.png")}
          alt="Hajj 2026"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Hajj 2026
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 drop-shadow-lg">
            Start your journey today
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Experience the spiritual journey of a lifetime. Our Hajj 2026 packages
            are designed to provide comfort, guidance, and peace of mind for every
            pilgrim. Register now to receive updates and be the first to know about
            our exclusive offerings.
          </p>

          <a
            href="#register"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg"
            style={{ backgroundColor: "#2EA3F2" }}
          >
            Click here to Register for Hajj 2026 Updates
          </a>
        </div>
      </section>
    </div>
  );
}
