import React from 'react';
import { motion } from 'motion/react';
import { Product, View } from './types';
import { ChevronRight, Plus, Minus, Heart, ArrowLeft } from 'lucide-react';
import { products } from './data';
import ProductCard from './components/ProductCard';

interface ProductDetailProps {
  product: Product;
  setView: (v: View) => void;
  onAddToCart: (p: Product, size: string) => void;
}

export default function ProductDetail({ product, setView, onAddToCart }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = React.useState('38');
  const sizes = ['36', '37', '38', '39', '40', '41'];
  
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <button 
              onClick={() => setView('shop')}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft size={12} /> Back to Collection
            </button>
          </div>
          
          <div className="aspect-[4/5] bg-surface-container overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="aspect-square bg-surface-container overflow-hidden opacity-80">
                <img src={product.image} className="w-full h-full object-cover grayscale" />
             </div>
             <div className="aspect-square bg-surface-container overflow-hidden opacity-80">
                <img src={product.image} className="w-full h-full object-cover scale-150" />
             </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="sticky top-40 space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-[10px] text-stone-500 uppercase tracking-[0.3em]">{product.category}</span>
              <h1 className="font-serif text-5xl lg:text-6xl tracking-tight uppercase leading-none">{product.name}</h1>
              <p className="font-sans text-2xl text-stone-900 font-light">${product.price} AUD</p>
            </div>

            <p className="font-serif text-lg text-stone-600 leading-relaxed italic opacity-80">
              {product.description}
            </p>

            <div className="bg-stone-100 p-8 border-l-2 border-stone-900">
               <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2 block">Designer's Note</span>
               <p className="font-serif text-sm text-stone-600 italic leading-relaxed">
                 "With this piece, we explored the intersection of raw materiality and structured geometry. It's about finding beauty in the unfinished edge and the purity of the silhouette, a nod to the avant-garde spirit that drives our studio."
               </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">Select Size (EU)</span>
                  <button className="text-[10px] uppercase tracking-[0.2em] border-b border-stone-300 text-stone-400">Size Guide</button>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-5 border text-xs uppercase tracking-widest transition-all ${
                        selectedSize === size 
                          ? 'border-stone-900 bg-stone-900 text-white' 
                          : 'border-stone-200 text-stone-400 hover:border-stone-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => onAddToCart(product, selectedSize)}
                  className="w-full bg-stone-900 text-white py-6 text-xs uppercase tracking-[0.3em] font-medium transition-transform hover:scale-[1.01] active:scale-95"
                >
                  Add to Bag
                </button>
                <button className="w-full border border-stone-200 py-6 text-xs uppercase tracking-[0.3em] font-medium flex items-center justify-center gap-3 transition-colors hover:bg-stone-50">
                  <Heart size={14} /> Wishlist
                </button>
              </div>
            </div>

            {/* Accordion mockup */}
            <div className="pt-12 space-y-6 border-t border-stone-200">
               {['Style Notes', 'Materials & Care', 'Shipping'].map(item => (
                 <div key={item} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-[10px] uppercase tracking-[0.2em] group-hover:text-stone-500 transition-colors">{item}</span>
                    <Plus size={14} className="text-stone-300" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended items */}
      <section className="mt-32 border-t border-stone-100 pt-24">
        <h2 className="font-serif text-3xl uppercase tracking-tight mb-16 underline underline-offset-8 decoration-stone-200">Complete the Look</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {related.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onClick={() => {
                setView('product');
                // Normally this would be handled by a router or higher level state
              }}
              onAddToCart={(e) => e.stopPropagation()}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
