import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [onSearch, setOnSearch] = useState(null);
  useEffect(() => {
    axios
      .get("https://kenzieshop.herokuapp.com/products/")
      .then((res) => setProducts(res.data));
  }, [onSearch]);

  const changeProducts = (array) => {
    return setSearchProducts(array);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        changeProducts,
        searchProducts,
        setOnSearch,
        onSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
