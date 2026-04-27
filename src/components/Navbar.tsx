import React from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from '../types';

interface NavbarProps {
  setView: (view: View) => void;
  currentView: View;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ setView, currentView, cartCount, onOpenCart }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Shop', view: 'shop' as View },
    { label: 'New Arrivals', view: 'shop' as View },
    { label: 'Journal', view: 'home' as View },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 border-b border-stone-200 px-8 lg:px-16 py-6 flex justify-between items-center backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-stone-900"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setView(link.view)}
              className={`font-serif uppercase tracking-widest text-xs transition-colors duration-300 ${
                currentView === link.view && link.view !== 'home'
                  ? 'text-stone-900 border-b border-stone-900 pb-1'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setView('home')}
        className="text-xl lg:text-2xl font-bold tracking-tighter font-serif text-stone-900 uppercase absolute left-1/2 -translate-x-1/2"
      >
        SIENA BLAIR
      </button>

      <div className="flex items-center gap-6">
        <button className="hidden lg:block text-stone-500 hover:text-stone-900 transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button 
          onClick={onOpenCart}
          className="relative text-stone-900 scale-100 active:scale-95 transition-transform"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-stone-200 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setView(link.view);
                  setIsMobileMenuOpen(false);
                }}
                className="font-serif uppercase tracking-widest text-lg text-left text-stone-900"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
