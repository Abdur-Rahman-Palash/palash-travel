import { Link } from 'react-router-dom';
import { Calendar, DollarSign, MapPin, ChevronRight } from 'lucide-react';

export default function TourCard({ 
  id, 
  title, 
  description, 
  price, 
  duration, 
  location,
  image, 
  badge,
  category 
}) {
  return (
    <Link to={`/tour/${id}`}>
      <div className="card overflow-hidden group cursor-pointer h-full hover:scale-105 transform transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {badge}
              </span>
            </div>
          )}

          {/* Category */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {category}
              </span>
            </div>
          )}

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
            {description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-gray-200">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <div>
                <p className="text-xs text-gray-500 uppercase">Duration</p>
                <p className="text-sm font-semibold text-gray-900">{duration}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              <div>
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="text-sm font-semibold text-gray-900">{location}</p>
              </div>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase">From</p>
              <div className="flex items-center gap-1">
                <DollarSign size={20} className="text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">{price}</span>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group/btn">
              <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
