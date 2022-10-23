import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": { backgroundColor: "green" },
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
          sx={{ flexGrow: 1 }}
          variant="contained"
          endIcon={<RemoveShoppingCartOutlinedIcon />}
          onClick={() => removeFromCart(product)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          color="secondary"
          className={classes.button}
          sx={{ flexGrow: 1 }}
          variant="contained"
          endIcon={<AddShoppingCartOutlinedIcon />}
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      )}
    </Box>
  );
};
