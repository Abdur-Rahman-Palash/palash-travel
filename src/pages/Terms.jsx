import Hero from '../components/Hero';

export default function Terms() {
  return (
    <div>
      <Hero
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
        height="h-96"
        showScrollIndicator={false}
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
          <div className="text-gray-600 space-y-6 leading-relaxed">
            <p>
              These Terms and Conditions govern your access to and use of Dar El Salam Travel's website and services. 
              By accessing our site or using our services, you agree to be bound by these terms.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Booking & Reservations</h3>
            <p>
              All bookings are subject to availability and our confirmation. A deposit is required to secure your booking. 
              Final payment must be received by the date specified in your booking confirmation.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Cancellation Policy</h3>
            <p>
              Cancellations made 60 days before departure are eligible for a full refund minus a 5% administrative fee. 
              Cancellations made 30-60 days before departure will incur a 25% cancellation fee. Cancellations made within 
              30 days of departure are non-refundable.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Limitations of Liability</h3>
            <p>
              Dar El Salam Travel is not responsible for any delays, cancellations, or changes made by third-party providers 
              including airlines, hotels, and tour operators. We are not liable for personal injuries, lost luggage, or other 
              unforeseen circumstances beyond our control.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Travel Documents</h3>
            <p>
              You are responsible for obtaining valid travel documents including passports and visas. We recommend purchasing 
              travel insurance to cover unexpected events.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Contact Us</h3>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at info@darelsalam.com or 1-866-327-7252.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
