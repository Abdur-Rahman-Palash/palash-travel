import { useState } from 'react';
import TourCard from './TourCard';
import { Filter } from 'lucide-react';

export default function PackageList({ packages, title = "Featured Packages", showFilters = true }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Extract unique categories
  const categories = ['All', ...new Set(packages.map(pkg => pkg.category))];

  // Filter packages
  let filteredPackages = packages;
  if (selectedCategory !== 'All') {
    filteredPackages = packages.filter(pkg => pkg.category === selectedCategory);
  }

  // Sort packages
  if (sortBy === 'price-low') {
    filteredPackages.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredPackages.sort((a, b) => b.price - a.price);
  }

  return (
    <section id="featured-packages" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading">{title}</h2>
          <p className="section-subheading">
            Explore our carefully curated packages for unforgettable spiritual and travel experiences
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 md:mb-12 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Filter size={18} className="text-blue-600" />
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-gray-600 mt-4">
              Showing {filteredPackages.length} of {packages.length} packages
            </p>
          </div>
        )}

        {/* Package Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPackages.map((pkg) => (
              <TourCard
                key={pkg.id}
                {...pkg}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No packages found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
