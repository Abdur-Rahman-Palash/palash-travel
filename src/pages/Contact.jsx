import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Get In Touch"
        subtitle="We're here to help you plan your perfect journey"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
        height="h-96"
        showScrollIndicator={false}
      />

      <ContactForm />

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Find Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="card p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">United States</h3>
              <p className="text-gray-600 text-sm">Main Office & Operations</p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🇨🇦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Canada</h3>
              <p className="text-gray-600 text-sm">Regional Support Office</p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600 text-sm">Partner offices worldwide</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 w-full h-96 md:h-500 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-118.24368!3d34.05223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0MgMDUnMjAuNCJOIDExOCAxNCAyNy4yIlc!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "How do I book a package?",
                a: "You can book through our website or contact our team directly. We'll guide you through the entire process."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, bank transfers, and other secure payment methods. Installment plans are also available."
              },
              {
                q: "Is travel insurance included?",
                a: "Travel insurance is available as an add-on option. We strongly recommend it for all bookings."
              },
              {
                q: "Can I customize a package?",
                a: "Absolutely! We offer fully customizable packages tailored to your specific needs and preferences."
              },
              {
                q: "What is your cancellation policy?",
                a: "Our cancellation policy varies by package. Please contact us for details specific to your booking."
              },
              {
                q: "Do you provide visa assistance?",
                a: "Yes, we provide comprehensive visa assistance for all our travel packages."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <span className="text-blue-600 font-bold group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-4 md:px-6 py-4 text-gray-600 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
