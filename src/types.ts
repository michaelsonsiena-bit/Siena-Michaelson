export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Heels' | 'Loafers' | 'Boots' | 'Sandals' | 'Sneakers';
  color: string;
  image: string;
  description: string;
  isNew?: boolean;
  isLimited?: boolean;
}

export type View = 'home' | 'shop' | 'product' | 'cart';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
