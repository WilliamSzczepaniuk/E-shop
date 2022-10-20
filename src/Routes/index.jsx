import { Routes, Route } from "react-router-dom";
import { CartPage } from "../Pages/PageCart";
import { PageHome } from "../Pages/PageHome";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
export default Rotas;
