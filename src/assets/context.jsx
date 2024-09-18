import React, { createContext, useState } from 'react';

// Create a context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to update quantity
  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <CartContext.Provider value={{ quantity, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


