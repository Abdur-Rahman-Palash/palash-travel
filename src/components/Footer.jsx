import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Hajj', href: '/hajj' },
    { label: 'Umrah', href: '/umrah' },
    { label: 'Tours', href: '/tours' },
    { label: 'About Us', href: '/about' },
  ];

  const policies = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/dstworldtravel', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/dstworldtravel', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/dstworldtravel', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
     
        

        {/* Divider */}
        <div className="border-t border-gray-800 pt-4 pb-3">
          <div className="text-left text-gray-400 text-base md:text-lg pl-4 md:pl-12" style={{marginBottom: '0.5rem'}}>
            {/* Social Icons for mobile - above text and centered */}
            <div className="flex gap-4 mb-4 md:hidden justify-center">
              <a href="https://facebook.com/dstworldtravel" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={22} className="text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a href="https://twitter.com/dstworldtravel" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={22} className="text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a href="https://instagram.com/dstworldtravel" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={22} className="text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
            </div>
            <p className="mb-0">
              Copyright Dar El Salam Travel. All Rights Reserved. <span className="block md:inline"/>
              <a href="/privacy" className="no-underline hover:text-white transition-colors duration-200" style={{textDecoration: 'none'}}>Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="/terms" className="no-underline hover:text-white transition-colors duration-200" style={{textDecoration: 'none'}}>Terms &amp; Conditions</a>
            </p>
          </div>
        </div>
    </footer>
  );
}
