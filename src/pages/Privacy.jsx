import Hero from '../components/Hero';

export default function Privacy() {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
        height="h-96"
        showScrollIndicator={false}
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          <div className="text-gray-600 space-y-6 leading-relaxed">
            <p>
              This Privacy Policy describes how Dar El Salam Travel ("we", "us", "our" or "Company") collects, 
              uses, and shares information about you when you use our website and services.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you book a package, contact us, 
              or subscribe to our newsletter. This may include your name, email address, phone number, and travel preferences.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">How We Use Your Information</h3>
            <p>
              We use the information we collect to provide our services, communicate with you, and improve our offerings. 
              We do not share your personal information with third parties without your consent.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@darelsalam.com or 1-866-327-7252.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
