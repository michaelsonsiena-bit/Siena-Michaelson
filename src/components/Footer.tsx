import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-zinc-900 w-full py-24 px-8 lg:px-16 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
        <div className="space-y-8">
          <span className="text-xl font-bold font-serif mb-4 block text-stone-900 uppercase tracking-tighter">SIENA BLAIR</span>
          <p className="font-serif text-sm text-stone-500 leading-relaxed italic max-w-xs">
            Elevated footwear for the modern minimalist. Designed in Australia, crafted for the world with architectural precision and artisanal care.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-8 text-stone-900">Client Care</h4>
          <ul className="space-y-4">
            {['Shipping & Returns', 'Sizing Guide', 'Care Guide', 'Contact Us'].map(item => (
              <li key={item}>
                <a href="#" className="font-serif text-xs tracking-wider text-stone-500 hover:text-stone-900 transition-colors italic">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-8 text-stone-900">About</h4>
          <ul className="space-y-4">
            {['Our Story', 'Sustainability', 'Retailers', 'Journal'].map(item => (
              <li key={item}>
                <a href="#" className="font-serif text-xs tracking-wider text-stone-500 hover:text-stone-900 transition-colors italic">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 text-stone-900">Newsletter</h4>
          <p className="font-serif text-xs text-stone-500 italic">Sign up for early access to new collections and refined seasonal edits.</p>
          <div className="flex border-b border-stone-900 pb-3 group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none focus:ring-0 w-full p-0 font-serif text-xs placeholder:text-stone-300 italic"
            />
            <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold ml-4 hover:text-secondary transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-200 text-center">
        <span className="font-serif text-[10px] tracking-[0.2em] text-stone-400 uppercase italic">© 2024 SIENA BLAIR. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
