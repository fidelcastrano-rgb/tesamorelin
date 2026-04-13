import { useState, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, Send, Mail, Trash2 } from 'lucide-react';
import { CartItem } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface OrderBuilderProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, variantSize: string, delta: number) => void;
  onRemoveItem: (productId: string, variantSize: string) => void;
  onClearCart: () => void;
}

export default function OrderBuilder({ items, onUpdateQuantity, onRemoveItem, onClearCart }: OrderBuilderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'crypto' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30;
  const total = subtotal + shippingFee;
  const minOrderAmount = 100;

  const generateOrderText = () => {
    let text = 'Hello Tesamorelin Health, I would like to place an order:\n\n';
    
    text += `Customer Details:\n`;
    text += `Name: ${customerInfo.name || 'Not provided'}\n`;
    text += `Email: ${customerInfo.email || 'Not provided'}\n`;
    text += `Phone: ${customerInfo.phone || 'Not provided'}\n`;
    text += `Address: ${customerInfo.address || 'Not provided'}\n\n`;

    text += `Order Details:\n`;
    items.forEach((item) => {
      text += `- ${item.name} (${item.variantSize}) x ${item.quantity} - £${(item.price * item.quantity).toFixed(2)}\n`;
    });
    text += `\nSubtotal: £${subtotal.toFixed(2)}`;
    text += `\nShipping: £${shippingFee.toFixed(2)}`;
    text += `\nTotal: £${total.toFixed(2)}`;
    return encodeURIComponent(text);
  };

  const sendWA = () => {
    window.open(`https://wa.me/447341056054?text=${generateOrderText()}`, '_blank');
  };

  const sendEmail = () => {
    window.location.href = `mailto:info@tesamorelinlab.co.uk?subject=New Order Request&body=${generateOrderText()}`;
  };

  const handleCryptoPayment = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      alert("Please provide your name and email before proceeding to payment.");
      return;
    }
    setIsProcessing(true);
    try {
      const response = await fetch('/api/crypto-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: total,
          customerInfo
        })
      });
      const data = await response.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert("Failed to initialize payment. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
      >
        <div className="relative">
          <ShoppingBag size={24} />
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-primary">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>
        <span className="font-bold text-sm hidden md:block group-hover:mr-2 transition-all">
          View Order Builder
        </span>
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-primary text-white">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={24} />
                  <h2 className="font-display font-bold text-xl">Order Builder</h2>
                </div>
                <button aria-label="Close cart" onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variantSize}`} className="flex gap-4 group">
                    <div className="w-16 h-16 bg-support rounded-xl flex-shrink-0 flex items-center justify-center text-primary font-bold">
                      {item.name[0]}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                        <button
                          aria-label="Remove item"
                          onClick={() => onRemoveItem(item.productId, item.variantSize)}
                          className="text-gray-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 font-medium mb-3 uppercase tracking-wider">
                        Size: {item.variantSize} • £{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-support rounded-lg px-2 py-1">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => onUpdateQuantity(item.productId, item.variantSize, -1)}
                            className="p-1 text-gray-600 hover:text-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => onUpdateQuantity(item.productId, item.variantSize, 1)}
                            className="p-1 text-gray-600 hover:text-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-primary">£{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {items.length > 0 && (
                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <h3 className="font-bold text-gray-900">Customer Details</h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="w-full px-4 py-3 bg-support rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        className="w-full px-4 py-3 bg-support rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-support rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      />
                      <textarea
                        placeholder="Shipping Address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 bg-support rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-support border-t border-gray-100 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-bold text-gray-900">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">Shipping Fee</span>
                    <span className="font-bold text-gray-900">£{shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-gray-600 font-medium">Order Total</span>
                    <span className="text-3xl font-display font-bold text-primary">£{total.toFixed(2)}</span>
                  </div>
                </div>

                {total < minOrderAmount ? (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium text-center">
                    Minimum order amount (including shipping) is £{minOrderAmount.toFixed(2)}.<br/>
                    Add £{(minOrderAmount - total).toFixed(2)} more to checkout.
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-sm">Select Payment Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setPaymentMethod('bank')}
                        className={cn(
                          "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all",
                          paymentMethod === 'bank' ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/30"
                        )}
                      >
                        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="Bank Transfer" className="w-8 h-8 object-contain" />
                        <span className="text-xs font-bold">Bank Transfer</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('crypto')}
                        className={cn(
                          "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all",
                          paymentMethod === 'crypto' ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/30"
                        )}
                      >
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png" alt="Crypto" className="w-8 h-8 object-contain" />
                        <span className="text-xs font-bold">Crypto</span>
                      </button>
                    </div>

                    {paymentMethod === 'bank' && (
                      <div className="grid grid-cols-2 gap-4 pt-4 animate-in fade-in slide-in-from-top-2">
                        <button
                          onClick={sendWA}
                          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-95 text-sm"
                        >
                          <Send size={16} />
                          <span>WhatsApp</span>
                        </button>
                        <button
                          onClick={sendEmail}
                          className="flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-95 text-sm"
                        >
                          <Mail size={16} />
                          <span>Email</span>
                        </button>
                      </div>
                    )}

                    {paymentMethod === 'crypto' && (
                      <div className="pt-4 animate-in fade-in slide-in-from-top-2">
                        <button
                          onClick={handleCryptoPayment}
                          disabled={isProcessing}
                          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-95 disabled:opacity-70"
                        >
                          {isProcessing ? "Processing..." : "Pay with Crypto"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                <button
                  onClick={onClearCart}
                  className="w-full text-center text-xs font-bold text-gray-600 hover:text-red-500 transition-colors uppercase tracking-widest"
                >
                  Clear Order Builder
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
