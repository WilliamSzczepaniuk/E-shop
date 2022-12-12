import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ButtonCard } from "./Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
export const CardComponent = ({ product, cartItem }) => {
  const useStyles = (theme) => ({
    boxCard: {},
  });
  const classes = useStyles();
  const { image, title, price } = product;
  const reduceTitle = title
    .split(" ")
    .splice(1, 6)
    .toString(" ")
    .replaceAll(",", " ");

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: "268px",
        width: "270px",
        height: "360px",
        flexDirection: "column",
        margin: "15px",
        padding: "0px 15px 5px 15px",
      }}
    >
      <CardMedia
        sx={{
          maxHeight: "200px",
          minHeight: "150px",
          minWidth: "120px",
          maxWidth: "100%",
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
        >
          {title || ""}
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
