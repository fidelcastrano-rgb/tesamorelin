import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-display text-xl font-bold text-primary tracking-tight">
                Tesamorelin <span className="text-secondary">Peptide.</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              UK's leading supplier of high-purity research peptides. Committed to scientific excellence and laboratory-grade quality.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tesamorelinlab?igsh=MWppbHltNGR6b3U5Nw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-support rounded-full text-gray-600 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@peptideworks?_r=1&_t=ZN-95N9q4qoQb8" target="_blank" rel="noopener noreferrer" className="p-2 bg-support rounded-full text-gray-600 hover:text-primary transition-colors">
                <TikTokIcon size={18} />
              </a>
              <a href="#" className="p-2 bg-support rounded-full text-gray-600 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/products?cat=weight-loss" className="hover:text-primary transition-colors">Weight Loss</Link></li>
              <li><Link to="/products?cat=recovery" className="hover:text-primary transition-colors">Healing & Recovery</Link></li>
              <li><Link to="/products?cat=muscle" className="hover:text-primary transition-colors">Muscle Growth</Link></li>
              <li><Link to="/products?cat=anti-aging" className="hover:text-primary transition-colors">Anti-Aging</Link></li>
            </ul>
          </div>

          {/* Research Column */}
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Research</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Latest Studies</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Safety Protocols</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Ordering Info</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <span>info@tesamorelinlab.co.uk</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <span>WhatsApp: +44 7341 056054</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-secondary" />
                <span>London & Northern Ireland, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 Tesamorelin Peptide. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
          <p className="max-w-md text-center md:text-right">
            Disclaimer: All products are for laboratory use and also for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
