import Box from "@mui/material/Box";
import { useEffect } from "react";
import { CardComponent } from "../Card";

const ListProducts = ({ products, cartItem }) => {
  useEffect(()=>{},[])
  return (
    <Box flexWrap={"wrap"} display={"flex"}>
      {products.map((product) => (
        <CardComponent
          cartItem={cartItem}
          key={product.id}
          product={product}
        />
      ))}
    </Box>
  );
};
export default ListProducts;
