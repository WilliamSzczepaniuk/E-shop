import { useContext } from "react";
import { Header } from "../../Components/Header";
import { ListProducts } from "../../Components/ListProducts";
import { CartContext } from "../../Providers/Cart";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
export const CartPage = () => {
  const { productsCart } = useContext(CartContext);

  return (
    <Box>
      <Header onCart={true} />
      <Typography marginTop={5} variant="h3">
        Suas compras
      </Typography>
      {productsCart.length > 0 ? (
        <ListProducts products={productsCart} cartItem={true} />
      ) : (
        <Typography marginTop={10} variant="h4">
          Nada por aqui
        </Typography>
      )}
    </Box>
  );
};
