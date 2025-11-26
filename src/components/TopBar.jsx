
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full text-gray-100 text-sm fixed top-0 left-0 z-50" style={{ background: '#424242' }}>
      <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center py-2 px-2 sm:px-4 gap-2 sm:gap-4 w-full">
        {/* Phone and Email stacked on mobile */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-1">
          <div className="flex items-center gap-1">
            <Phone size={16} className="text-gray-300" />
            <a href="tel:+880123456789" className="hover:underline text-gray-100">+880 1234-56789</a>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} className="text-gray-300" />
            <a href="mailto:info@example.com" className="hover:underline text-gray-100 break-all">info@example.com</a>
          </div>
        </div>
        {/* Social Icons: only show on sm and up */}
        <div className="hidden sm:flex items-center gap-3 ml-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full bg-[#424242] hover:bg-blue-600 transition-colors">
            <Facebook size={16} className="text-gray-300 hover:text-white" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full bg-[#424242] hover:bg-black transition-colors">
            {/* X icon as SVG */}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-gray-300 hover:text-white"><path d="M4 4h4.586l3.293 3.293L15.172 4H20v4.586l-3.293 3.293L20 15.172V20h-4.586l-3.293-3.293L8.828 20H4v-4.586l3.293-3.293L4 8.828V4zm2 2v2.828l3.293 3.293L6 15.172V18h2.828l3.293-3.293L17.172 18H20v-2.828l-3.293-3.293L20 8.828V6h-2.828l-3.293 3.293L6.828 6H6z" fill="currentColor"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full bg-[#424242] hover:bg-pink-500 transition-colors">
            <Instagram size={16} className="text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
