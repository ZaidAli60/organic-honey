// context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.title === product.title);
    if (existing) {
      setCartItems(prev =>
        prev.map(item =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (title) => {
    setCartItems(prev => prev.filter(item => item.title !== title));
  };

  const updateQuantity = (title, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
