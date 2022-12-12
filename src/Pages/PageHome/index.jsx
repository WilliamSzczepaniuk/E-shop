import { ListProducts } from "../../Components/ListProducts";
import { Header } from "../../Components/Header/index.jsx";
import { ProductsContext } from "../../Providers/Products";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Footer } from "../../Components/Fotter";

export const PageHome = () => {
  const { products, searchProducts, onSearch, productsNews } =
    useContext(ProductsContext);

  return (
    <Box sx={{ backgroundColor: "rgb(250,250,251)" }}>
      <Header onCart={false} />
      <Typography
        margin="30px"
        variant="h3"
        sx={{ fontSize: { xs: "0.8rem", md: "1.8rem" } }}
        fontFamily="Roboto, sans-serif"
      >
        Mais pedidos
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ListProducts
          cartItem={false}
          products={onSearch ? searchProducts : products}
        />
        {searchProducts.length < 1 && onSearch && (
          <Typography>Nenhum item corresponde a busca</Typography>
        )}
      </Box>
      <Typography
        margin="30px"
        variant="h3"
        sx={{ fontSize: { xs: "0.8rem", md: "1.8rem" } }}
      >
        Acabaram de chegar
      </Typography>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListProducts products={productsNews} />
      </Box>
      <Footer />
    </Box>
  );
};
