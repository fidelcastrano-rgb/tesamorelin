import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Check, ArrowLeft, Shield, Truck, FlaskConical, Microscope, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { Product, ProductVariant } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export default function ProductDetail({ onAddToCart }: { onAddToCart: (p: Product, v: ProductVariant) => void }) {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product ? product.variants[0] : null);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('contents');

  if (!product || !selectedVariant) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h1 className="text-4xl font-display font-bold text-primary mb-8">Product not found.</h1>
        <Link to="/products" className="btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="pt-32 pb-32 bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-12 font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={16} />
          <span>Back to Catalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-xl border border-gray-100 flex items-center justify-center p-8"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="grid grid-cols-3 gap-6">
              {PRODUCTS.slice(0, 3).map((p, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-100 cursor-pointer hover:border-primary transition-all flex items-center justify-center p-2">
                  <img src={p.image} alt="" className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">{product.name}</h1>
              <div className="flex items-center gap-4 mb-8">
                <p className="text-4xl font-display font-bold text-primary">£{selectedVariant.price.toFixed(2)}</p>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">In Stock</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="mb-12">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">Select Research Quantity</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.size}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-8 py-4 rounded-2xl font-bold text-sm transition-all border-2',
                      selectedVariant.size === v.size
                        ? 'bg-primary text-white border-primary shadow-lg'
                        : 'bg-white text-gray-600 border-gray-100 hover:border-primary/30'
                    )}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleAddToCart}
                className={cn(
                  'flex-grow py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95',
                  isAdded ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'
                )}
              >
                {isAdded ? (
                  <>
                    <Check size={24} />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={24} />
                    <span>Add to Order Builder</span>
                  </>
                )}
              </button>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="p-6 bg-orange-50 border-l-4 border-orange-400 rounded-r-2xl">
                <h4 className="font-bold text-orange-900 mb-1">Ordering Protocol</h4>
                <p className="text-xs text-orange-700/70">Add items to builder, then submit via WhatsApp/Email for payment instructions.</p>
              </div>
              <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded-r-2xl">
                <h4 className="font-bold text-green-900 mb-1">Usage Affirmation</h4>
                <p className="text-xs text-green-700/70">Approved for human use. Suitable for human consumption and applications.</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
              <div className="flex border-b border-gray-100">
                {['contents', 'storage', 'supply'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'flex-grow py-5 text-xs font-bold uppercase tracking-widest transition-all',
                      activeTab === tab ? 'bg-support text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-gray-600'
                    )}
                  >
                    {tab.replace('-', ' ')}
                  </button>
                ))}
              </div>
              <div className="p-8 text-sm text-gray-600 leading-relaxed">
                {activeTab === 'contents' && (
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-secondary" /> 1x Lyophilized Peptide Vial</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-secondary" /> Purity: 99%+ (HPLC Verified)</li>
                    <li className="flex items-center gap-3"><ChevronRight size={14} className="text-secondary" /> Molecular Weight: Verified</li>
                  </ul>
                )}
                {activeTab === 'storage' && (
                  <p>Store at -20°C for long-term stability. Avoid repeated freeze-thaw cycles once reconstituted. Keep away from direct sunlight.</p>
                )}
                {activeTab === 'supply' && (
                  <p>Sourced from ISO-certified laboratory facilities. Each batch is double-tested for purity and sequence accuracy before distribution.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Shield size={24} />, title: 'Lab Tested', desc: 'COA Available' },
            { icon: <Truck size={24} />, title: 'Fast Shipping', desc: 'Next Day UK' },
            { icon: <FlaskConical size={24} />, title: '99% Purity', desc: 'HPLC Verified' },
            { icon: <Microscope size={24} />, title: 'Research Grade', desc: 'Certified Quality' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center group hover:border-primary/20 transition-all">
              <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
