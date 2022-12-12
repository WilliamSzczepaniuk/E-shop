import { Routes, Route } from "react-router-dom";
import { CartPage } from "../Pages/PageCart";
import { PageHome } from "../Pages/PageHome";
import { PageFavorites } from "../Pages/PageFavorites";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<PageFavorites />} />
    </Routes>
  );
};
export default Rotas;
