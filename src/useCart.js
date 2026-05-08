// Logic and Persistence for Cart Simulation

import { useState, useEffect } from 'react';

export const PRODUCTS = [
  { id: 1, name: "Studio Mic", price: 120.00 },
  { id: 2, name: "Pop Filter", price: 15.00 },
  { id: 3, name: "XLR Cable", price: 25.00 },
  { id: 4, name: "Boom Arm", price: 45.00 }
];

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart_state');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart_state', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev
      .map(item => item.id === id ? { ...item, qty: item.qty + delta } : item)
      .filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return { cart, addToCart, updateQty, total };
}