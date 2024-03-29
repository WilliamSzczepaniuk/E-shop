import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ButtonCard: {
    fontSize: { xs: "1rem", md: "2rem" },
  },
}));
export const ButtonCard = ({ cartItem, product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const classes = useStyles();
  return (
    <Box>
      {cartItem ? (
        <Button
          color="secondary"
          variant="contained"
          endIcon={<RemoveShoppingCartOutlinedIcon />}
          onClick={() => removeFromCart(product)}
        >
          Remover
        </Button>
      ) : (
        <Button
          sx={{
            flexGrow: 1,
            fontSize: { xs: "0.7rem", md: "0.8rem" },
          }}
          color="secondary"
          variant="contained"
          endIcon={<AddShoppingCartOutlinedIcon />}
          onClick={() => addToCart(product)}
        >
          Comprar
        </Button>
      )}
    </Box>
  );
};
