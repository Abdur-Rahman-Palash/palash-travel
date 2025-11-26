import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, Calendar, MapPin, DollarSign, Users, Clock, CheckCircle, X } from 'lucide-react';
import { packages } from '../data/packages';

export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  const pkg = packages.find(p => p.id === parseInt(id));

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the package you're looking for.</p>
          <button
            onClick={() => navigate('/tours')}
            className="btn-primary"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-96 md:h-500 overflow-hidden bg-gray-300">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white/90 text-gray-900 px-4 py-2 rounded-lg hover:bg-white transition-all"
          >
            <ChevronLeft size={20} />
            Back
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-20 pb-6">
          <div className="container-custom text-white">
            <div className="flex items-center gap-3 mb-2">
              {pkg.badge && (
                <span className="bg-blue-600 px-4 py-1 rounded-full font-semibold">
                  {pkg.badge}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{pkg.title}</h1>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase">Price</p>
                  <p className="text-xl font-bold text-gray-900">${pkg.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase">Duration</p>
                  <p className="text-xl font-bold text-gray-900">{pkg.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase">Location</p>
                  <p className="text-xl font-bold text-gray-900">{pkg.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase">Category</p>
                  <p className="text-xl font-bold text-gray-900">{pkg.category}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About This Package</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {pkg.fullDescription}
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Includes */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-green-600" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <X size={24} className="text-red-600" />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {pkg.excludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6 md:p-8">
              {/* Price Summary */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm uppercase mb-2">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-600">${pkg.price}</span>
                  <span className="text-gray-600">per person</span>
                </div>
              </div>

              {/* Booking Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowBooking(!showBooking)}
                  className="w-full btn-primary text-lg font-bold"
                >
                  Book Now
                </button>
                <a
                  href="mailto:info@darelsalam.com"
                  className="block w-full btn-outline text-center text-lg font-bold"
                >
                  Send Inquiry
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Need Help?</h4>
                <div className="space-y-3">
                  <a href="tel:1-866-327-7252" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Clock size={18} />
                    1-866-327-7252
                  </a>
                  <a href="mailto:info@darelsalam.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Calendar size={18} />
                    info@darelsalam.com
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Fully Insured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Expert Guides
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
