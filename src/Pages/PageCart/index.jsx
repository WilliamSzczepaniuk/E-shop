import { useContext } from "react";
import { Header } from "../../Components/Header";
import ListProducts from "../../Components/List Products";
import { CartContext } from "../../Providers/Cart";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const CartPage = () => {
  const { productsCart } = useContext(CartContext);
  console.log(productsCart)
  return (
    <Box>
      <Header onCart={true}/>
      <Typography marginTop={5} variant="h3">Suas compras</Typography>
      {productsCart.length > 0 ? (
        <ListProducts products={productsCart} cartItem={true} />
      ) : (
        <Typography marginTop={10} variant="h4">Nada por aqui</Typography>
      )}
    </Box>
  );
};
export default CartPage;
