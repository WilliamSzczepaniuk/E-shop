import { useContext } from "react";
import { Header } from "../../Components/Header";
import ListProducts from "../../Components/List Products";
import { CartContext } from "../../Providers/Cart";
import { Container } from "./styles";

const CartPage = () => {
  const { productsCart } = useContext(CartContext);

  return (
    <Container>
      <Header onCart={true} />
      <h3>Suas compras</h3>
      {productsCart.length > 0 ? (
        <ListProducts products={productsCart} cartItem={true} />
      ) : (
        <h3>Nada por aqui</h3>
      )}
    </Container>
  );
};
export default CartPage;
