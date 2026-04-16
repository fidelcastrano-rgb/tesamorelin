import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/blog' },
  { name: 'FAQs', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              T
            </div>
            <span className="font-display text-xl font-bold text-primary tracking-tight">
              Tesamorelin <span className="text-secondary">Peptide.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary',
                  location.pathname === item.path ? 'text-secondary' : 'text-gray-600'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/products" className="btn-primary py-2 px-6 text-sm">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold text-gray-800 hover:text-secondary"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-xl px-12"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
