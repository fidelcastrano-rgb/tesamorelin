import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import ProductCard from '@/src/components/ProductCard';
import { Product, ProductVariant } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  'All Products',
  'Weight Loss / GLP-1',
  'Advanced Weight Loss',
  'Appetite Control',
  'Fat Burning',
  'Fat Loss / HGH',
  'Growth Hormone',
  'Recovery / Healing',
  'Muscle Growth',
  'Anti-Aging / Skin',
  'Longevity',
  'Skin / Hydration',
  'Hormone Support',
  'Wellness',
  'Immune Support',
  'Sleep Support',
  'Tanning',
];

export default function Products({ onAddToCart }: { onAddToCart: (p: Product, v: ProductVariant) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Products' || p.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-display font-bold text-primary mb-6">Research Catalog.</h1>
          <p className="text-xl text-gray-600">Explore our full range of high-purity research peptides. Lab-tested and certified for laboratory excellence.</p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-24 z-30 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between glass p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 text-gray-600">
              <Filter size={16} />
              <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">Filter By</span>
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap border',
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-primary/30'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-white rounded-[3rem] border border-gray-100"
          >
            <div className="w-24 h-24 bg-support rounded-full flex items-center justify-center text-gray-600 mx-auto mb-8">
              <Search size={48} />
            </div>
            <h3 className="text-3xl font-display font-bold text-primary mb-4">No products found.</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Products');
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Trust Bar */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {[
            { label: 'Lab Tested', value: '99%+ Purity' },
            { label: 'UK Shipping', value: 'Next Day Delivery' },
            { label: 'Secure Support', value: 'WhatsApp & Email' },
            { label: 'Discreet Packaging', value: '100% Privacy' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-xl font-display font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
