import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  const addToCart = (item) => {
    const double = productsCart.some((comparation) => comparation === item);
    !double && setProductsCart([...productsCart, item]);
  };

  const removeFromCart = (item) => {
    const newList = productsCart.filter((product) => product !== item);

    setProductsCart(newList);
  };

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, productsCart }}>
      {children}
    </CartContext.Provider>
  );
};
