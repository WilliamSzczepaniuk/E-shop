import Box from "@mui/material/Box";
import { CardComponent } from "../Card";

export const ListProducts = ({ products, cartItem }) => {
  return (
    <Box
      sx={{
        width: "auto",
        overflowX: { xs: "scroll", md: "inherit" },
        display: "flex",
      }}
    >
      {products.map((product, i) => (
        <CardComponent cartItem={cartItem} key={i} product={product} />
      ))}
    </Box>
  );
};
