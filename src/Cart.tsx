import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, ArrowRight, Minus, Plus, Lock } from 'lucide-react';
import { CartItem } from './types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, updateQuantity, removeFromCart }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-stone-50 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-stone-200 flex justify-between items-center">
              <h2 className="font-serif text-2xl uppercase tracking-tight">Shopping Bag</h2>
              <button 
                onClick={onClose}
                className="text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-8 py-4 custom-scroll">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} strokeWidth={1} className="text-stone-300 mb-6" />
                  <p className="font-serif text-lg italic text-stone-500 mb-8">Your bag is currently empty.</p>
                  <button 
                    onClick={onClose}
                    className="border border-stone-900 px-8 py-4 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6">
                      <div className="w-24 aspect-[3/4] bg-surface-container flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow py-2">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-serif text-sm uppercase tracking-widest">{item.name}</h3>
                          <span className="text-sm font-sans">${item.price}</span>
                        </div>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-4">
                          {item.color} / Size {item.selectedSize}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-stone-200">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:text-secondary"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:text-secondary"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] uppercase tracking-widest border-b border-stone-300 hover:border-stone-900 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-stone-200">
                <div className="flex justify-between mb-4">
                  <span className="font-serif text-lg uppercase tracking-tight">Subtotal</span>
                  <span className="font-sans text-lg">${subtotal} AUD</span>
                </div>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-8">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full bg-stone-900 text-white py-6 flex items-center justify-center gap-3 group transition-transform hover:scale-[1.01] active:scale-95">
                  <span className="text-xs uppercase tracking-[0.2em]">Checkout</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-6 flex items-center justify-center gap-2 text-stone-400">
                  <Lock size={12} />
                  <span className="text-[10px] uppercase tracking-widest">Secure Payment</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
