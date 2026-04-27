import { Product } from '../types';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
}

export default function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-surface-container-low">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-[#A3A58A] text-white px-3 py-1 font-sans text-[10px] uppercase tracking-widest">
            New Arrival
          </span>
        )}
        {product.isLimited && (
          <span className="absolute top-4 left-4 z-10 bg-[#8A7F73] text-white px-3 py-1 font-sans text-[10px] uppercase tracking-widest">
            Limited
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={onAddToCart}
            className="bg-white text-stone-900 px-6 py-3 font-sans text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-stone-900 hover:text-white transition-colors"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest mb-1">{product.name}</h3>
        <p className="font-sans text-sm text-stone-500">${product.price} AUD</p>
      </div>
    </motion.div>
  );
}
