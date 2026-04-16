import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';
import { Product, ProductVariant } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product, variant: ProductVariant) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
    >
      {/* Image Section */}
      <Link to={`/products/${product.slug}`} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-6 block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Subtle Watermark */}
        <div className="absolute bottom-4 right-4 pointer-events-none select-none opacity-10 rotate-[-15deg]">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">
            Tesamorelin Labs
          </span>
        </div>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Best Seller
            </span>
          )}
          {product.isBundleDeal && (
            <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Bundle Deal
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/10">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <Link to={`/products/${product.slug}`}>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Variant Selector */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">Select Size</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.size}
                onClick={() => setSelectedVariant(v)}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium rounded-lg border transition-all',
                  selectedVariant.size === v.size
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-primary/30'
                )}
              >
                {v.size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Price</p>
            <p className="text-2xl font-display font-bold text-primary">
              £{selectedVariant.price.toFixed(2)}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/products/${product.slug}`}
              className="p-3 bg-support text-gray-600 hover:text-primary rounded-xl transition-colors"
              title="View Details"
            >
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={handleAddToCart}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm',
                isAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:bg-primary/90 active:scale-95'
              )}
            >
              {isAdded ? (
                <>
                  <Check size={18} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  <span>Add to Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
