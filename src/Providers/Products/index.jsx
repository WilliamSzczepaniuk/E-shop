import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      image:
        "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/6cf1bb7359f2dca08445c83ff58bf3bf.jpg.webp?itok=jJLhJycz",
      title: "batatinha",
      price: "200",
    },
    {
      image:
        "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/6cf1bb7359f2dca08445c83ff58bf3bf.jpg.webp?itok=jJLhJycz",
      title: "bolão",
      price: "120",
    },
    {
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/9f/2021/05/03/bolo-de-pera---eu-mereco-1620075703547_v2_1170x540.jpg",
      title: "Bolo artístico",
      price: "120",
    },
  ]);
  const [productsNews, setProductsNews] = useState([
    {
      image:
        "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/04/receitas-brigadeiro.jpg?fit=1092%2C818&ssl=1",
      title: "Brigadeiros mistos",
      price: "R$26,00",
    },
    {
      image:
        "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/04/receitas-brigadeiro.jpg?fit=1092%2C818&ssl=1",
      title: "Brigadeiros mistos",
      price: "R$26,00",
    },
    {
      image:
        "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/04/receitas-brigadeiro.jpg?fit=1092%2C818&ssl=1",
      title: "Brigadeiros mistos",
      price: "R$26,00",
    },
  ]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [onSearch, setOnSearch] = useState(false);

  const changeProducts = (array) => {
    return setSearchProducts(array);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        productsNews,
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
