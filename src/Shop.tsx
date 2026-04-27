import React from 'react';
import { motion } from 'motion/react';
import { products } from './data';
import ProductCard from './components/ProductCard';
import { Product, View } from './types';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';

interface ShopProps {
  setSelectedProduct: (p: Product) => void;
  setView: (v: View) => void;
}

export default function Shop({ setSelectedProduct, setView }: ShopProps) {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Heels', 'Loafers', 'Boots', 'Sandals', 'Sneakers'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-stone-200 pb-12">
        <div>
          <nav className="flex items-center gap-2 mb-4">
            <button onClick={() => setView('home')} className="text-[10px] text-stone-400 uppercase tracking-widest hover:text-stone-900">Home</button>
            <ChevronRight size={10} className="text-stone-300" />
            <span className="text-[10px] text-stone-900 uppercase tracking-widest font-medium">Shop All</span>
          </nav>
          <h1 className="font-serif text-5xl lg:text-6xl tracking-tight uppercase">Collection</h1>
        </div>
        <div className="flex items-center gap-12 mt-8 md:mt-0">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest">{filteredProducts.length} Products</p>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-stone-900 font-medium">
            <SlidersHorizontal size={14} /> Filter & Sort
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-40 space-y-12">
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] mb-8">Category</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs uppercase tracking-widest transition-colors ${
                        activeCategory === cat ? 'text-stone-900 font-semibold' : 'text-stone-400 hover:text-stone-900'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] mb-8">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {[36, 37, 38, 39, 40, 41].map(size => (
                  <button key={size} className="border border-stone-200 py-3 text-[10px] hover:border-stone-900 transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-stone-100">
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] mb-4">Craftsmanship</h3>
              <p className="text-[10px] text-stone-400 leading-relaxed tracking-wider uppercase">
                Each piece is carefully constructed using traditionl techniques in our Australian studio.
              </p>
            </div>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)}
                onAddToCart={(e) => e.stopPropagation()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
