import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ButtonCard } from "./Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export const CardComponent = ({ product, cartItem }) => {
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
        width: "300px",
        height: "360px",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{
          minHeight: "150px",
          minWidth: "100px",
          maxWidth: "120px",
          margin: "0 auto",
        }}
        component={"img"}
        image={image}
        alt={"image"}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Typography
          textAlign={"initial"}
          color="GrayText"
          gutterBottom
          variant="h6"
          fontSize={16}
          component="div"
          sx={{ name: "test" }}
        >
          {reduceTitle || "123"}
        </Typography>
        <Typography
          marginLeft={2}
          textAlign={"initial"}
          color={"GrayText"}
          variant="h6"
          fontSize={14}
        >
          {price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <ButtonCard product={product} cartItem={cartItem} />
      </CardActions>
    </Card>
  );
};
