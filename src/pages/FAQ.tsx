import { useState, useMemo } from 'react';
import { Search, Plus, Minus, HelpCircle, ShoppingCart, Truck, ShieldCheck, FileText } from 'lucide-react';
import { FAQS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { name: 'All', icon: <HelpCircle size={18} /> },
  { name: 'Ordering', icon: <ShoppingCart size={18} /> },
  { name: 'Shipping', icon: <Truck size={18} /> },
  { name: 'Quality', icon: <ShieldCheck size={18} /> },
  { name: 'Legal', icon: <FileText size={18} /> },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-display font-bold text-primary mb-6">Frequently Asked.</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our research compounds, ordering process, and laboratory protocols.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 px-4">Categories</p>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={cn(
                    'w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all',
                    selectedCategory === cat.name
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-white/80 border border-gray-100'
                  )}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Search */}
            <div className="relative mb-12 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary transition-colors" size={24} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-white rounded-3xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg font-medium shadow-sm"
              />
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-support transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                            {faq.category}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900">{faq.question}</h4>
                        </div>
                        <div className="w-10 h-10 bg-support rounded-full flex items-center justify-center text-primary group-open:rotate-180 transition-transform">
                          <Plus size={20} />
                        </div>
                      </summary>
                      <div className="p-8 pt-0 text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </details>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-gray-100">
                  <div className="w-20 h-20 bg-support rounded-full flex items-center justify-center text-gray-600 mx-auto mb-6">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">No results found.</h3>
                  <p className="text-gray-600">Try a different search term or category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
