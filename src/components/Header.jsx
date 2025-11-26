import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [umrahDropdown, setUmrahDropdown] = useState(false);

  return (
    <header
      className={`transition-all duration-300 z-50 mt-16 sm:mt-10 ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-lg bg-white' : 'relative bg-white border-b border-gray-200'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-12 lg:px-20">
        {/* Logo - using provided image, removed text label per request */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/hxGxQHmt/thinlogoblack.png"
            alt="Dar El Salam"
            className="w-36 md:w-44 object-contain"
          />
        </Link>

        {/* Custom Navigation - Hajj, Umrah (dropdown), Tours, Search icon */}
        <div className="hidden md:flex items-center gap-8">
          {/* Hajj */}
          <Link
            to="/hajj"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Hajj
          </Link>

          {/* Umrah Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setUmrahDropdown((v) => !v)}
              aria-haspopup="true"
              aria-expanded={umrahDropdown}
            >
              Umrah
              <ChevronDown size={18} />
            </button>
            {umrahDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <Link
                  to="/umrah2025"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg transition-colors duration-200"
                  onClick={() => setUmrahDropdown(false)}
                >
                  Umrah 2025
                </Link>
                <Link
                  to="/umrah2026"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg transition-colors duration-200"
                  onClick={() => setUmrahDropdown(false)}
                >
                  Umrah 2026
                </Link>
              </div>
            )}
          </div>

          {/* Tours */}
          <Link
            to="/tours"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Tours
          </Link>

          {/* Register Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeDFk7YmARcWqZ2awo0pvrqoPYgjf_t4rYRSV3Cdo6HFmJ0Pg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </a>

          {/* Search Icon & Input */}
          <div className="relative ml-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
              onClick={() => setShowSearch((v) => !v)}
            >
              <Search size={22} className="text-gray-700" />
            </button>
            {showSearch && (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/tours?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="absolute right-0 top-12 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center z-20"
                style={{ minWidth: 220 }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search tours..."
                  className="px-3 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
                  autoFocus
                />
                <button type="submit" className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Go</button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile: Search icon left of menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
              onClick={() => setShowSearch((v) => !v)}
            >
              <Search size={22} className="text-gray-700" />
            </button>
            {showSearch && (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/tours?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="absolute right-0 top-12 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center z-20"
                style={{ minWidth: 220 }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search tours..."
                  className="px-3 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
                  autoFocus
                />
                <button type="submit" className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Go</button>
              </form>
            )}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu (simplified for new nav structure) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="container-custom py-4 flex flex-col gap-2">
            <Link
              to="/hajj"
              className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hajj
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1 w-full text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg"
                onClick={() => setUmrahDropdown((v) => !v)}
                aria-haspopup="true"
                aria-expanded={umrahDropdown}
              >
                Umrah
                <ChevronDown size={18} />
              </button>
              {umrahDropdown && (
                <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <Link
                    to="/umrah2025"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg transition-colors duration-200"
                    onClick={() => { setUmrahDropdown(false); setIsMobileMenuOpen(false); }}
                  >
                    Umrah 2025
                  </Link>
                  <Link
                    to="/umrah2026"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg transition-colors duration-200"
                    onClick={() => { setUmrahDropdown(false); setIsMobileMenuOpen(false); }}
                  >
                    Umrah 2026
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/tours"
              className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </a>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors self-start"
              aria-label="Search"
            >
              <Search size={22} className="text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
