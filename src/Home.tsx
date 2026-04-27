import { motion } from 'motion/react';
import { products } from './data';
import ProductCard from './components/ProductCard';
import { Product, View } from './types';

interface HomeProps {
  setView: (view: View) => void;
  setSelectedProduct: (p: Product) => void;
}

export default function Home({ setView, setSelectedProduct }: HomeProps) {
  const featured = products.slice(0, 4);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden px-8 lg:px-16 mb-24 lg:mb-32">
        <div className="grid grid-cols-12 h-full gap-6">
          <div className="col-span-12 lg:col-span-8 relative group overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2680&auto=format&fit=crop"
              alt="Editorial high-fashion shot"
            />
            <div className="absolute bottom-12 left-12 lg:left-20 text-white z-10 max-w-lg">
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-serif text-5xl lg:text-7xl mb-8 leading-[1.1] tracking-tight"
              >
                THE SPRING<br/>COLLECTION
              </motion.h1>
              <motion.button 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                onClick={() => setView('shop')}
                className="bg-black text-white px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] transition-transform hover:scale-[1.02] active:scale-95"
              >
                Shop The Edit
              </motion.button>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-6">
            <div className="h-1/2 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=2680&auto=format&fit=crop"
                alt="Product detail"
              />
            </div>
            <div className="h-1/2 bg-on-secondary-container p-12 flex flex-col justify-end text-white">
              <span className="font-sans text-[10px] tracking-[0.2em] mb-4 opacity-70 uppercase">Limited Series</span>
              <h2 className="font-serif text-3xl mb-6 leading-tight">Artisanal Craftsmanship</h2>
              <button 
                onClick={() => setView('shop')}
                className="text-xs uppercase tracking-[0.2em] border-b border-white/40 pb-1 w-fit hover:border-white transition-all"
              >
                Explore Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-8 lg:px-16 mb-24 lg:mb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-sans text-[10px] text-stone-500 uppercase tracking-[0.2em]">Selected Works</span>
            <h2 className="font-serif text-4xl mt-2 uppercase tracking-tight">New Arrivals</h2>
          </div>
          <button 
            onClick={() => setView('shop')}
            className="font-sans text-xs uppercase tracking-[0.2em] border-b border-stone-900 pb-1 mb-1 transition-opacity hover:opacity-70"
          >
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featured.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => setSelectedProduct(product)}
              onAddToCart={(e) => {
                e.stopPropagation();
                // Simple feedback for now
              }}
            />
          ))}
        </div>
      </section>

      {/* Signature Highlight */}
      <section className="mb-24 lg:mb-32">
        <div className="editorial-grid px-8 lg:px-16">
          <div className="col-span-12 lg:col-span-6 aspect-square overflow-hidden bg-stone-100 flex items-center justify-center p-12 lg:p-24">
            <div className="text-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6 block">Core Series</span>
              <h2 className="font-serif text-5xl lg:text-6xl mb-8 tracking-tighter uppercase">The<br/>Art of<br/>Minimal</h2>
              <p className="font-serif text-sm text-stone-500 italic mb-10 max-w-xs mx-auto leading-relaxed">
                "Our core footwear explores the tension between bold, chunky silhouettes and the delicate precision of fine leather crafting."
              </p>
              <button 
                onClick={() => setView('shop')}
                className="font-sans text-xs uppercase tracking-[0.2em] border-b border-stone-900 pb-1"
              >
                Discover the Edit
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative overflow-hidden group">
            <img 
               className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
               src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=2680&auto=format&fit=crop" 
               alt="Minimal sandal detail"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-secondary-container mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight tracking-tight">Crafting Quiet Luxury for the Modern Woman</h2>
            <p className="font-serif text-lg text-stone-600 mb-10 leading-relaxed italic opacity-80">
              Inspired by the raw landscape of the Australian coastline and the structured elegance of architectural design, Siena Blair is a tribute to effortless sophistication. Each pair is handcrafted from premium leathers, designed to be lived in and loved for seasons to come.
            </p>
            <button className="border border-black px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95">
              The Siena Story
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[4/5] object-cover shadow-2xl" 
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2671&auto=format&fit=crop"
              alt="Artisanal workshop"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
