import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export const CardComponent = ({ product, cartItem }) => {
  const { addToCart, removeFromCart, productsCart } = useContext(CartContext);
  const { image, title, price } = product;
  const reduceTitle = title
    .split(" ")
    .splice(1, 6)
    .toString(" ")
    .replaceAll(",", " ");

  return (
    <Card
      sx={{
        margin: 1,
        display: "flex",
        maxWidth: 300,
        minWidth: 280,
        MaxHeight: 380,
        minHeight: 320,
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <CardMedia
        sx={{
          maxHeight: "220px",
          maxWidth: "100px",
          boxSizing: "content-box",
          margin: "0 auto",
        }}
        component={"img"}
        image={image}
        alt={"image"}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          alignSelf={"flex-end"}
          color="GrayText"
          gutterBottom
          variant="h6"
          component="div"
        >
          {reduceTitle}
        </Typography>
        <Typography color={"GrayText"} variant="h6">
          {price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {cartItem ? (
          <Button
            sx={{ flexGrow: 1 }}
            variant="contained"
            endIcon={<RemoveShoppingCartOutlinedIcon />}
            onClick={() => removeFromCart(product)}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            sx={{ flexGrow: 1 }}
            variant="contained"
            endIcon={<AddShoppingCartOutlinedIcon />}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
