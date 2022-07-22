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
        width:"300px",
        height:"360px",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <CardMedia
        sx={{
          minHeight:"150px",

          minWidth:"100px",
          maxWidth: "120px",

          margin: "0 auto",
        }}
        component={"img"}
        image={image}
        alt={"image"}
      />
      <CardContent sx={{ flexGrow: 1,justifyContent:"center" ,flexDirection:"column", display:"flex"}}>
        <Typography
          textAlign={"initial"}
          color="GrayText"
          gutterBottom
          variant="h6"
          fontSize={16}
          component="div"
        >
          {reduceTitle}
        </Typography>
        <Typography marginLeft={2} textAlign={"initial"} color={"GrayText"} variant="h6" fontSize={14}>
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
