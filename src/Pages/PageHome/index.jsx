import { ListProducts } from "../../Components/ListProducts";
import { Header } from "../../Components/Header/index.jsx";
import { ProductsContext } from "../../Providers/Products";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Footer } from "../../Components/Fotter";
import { useEffect } from "react";

export const PageHome = () => {
  const { products, searchProducts, onSearch } = useContext(ProductsContext);

  useEffect(() => {}, []);
  return (
    <Box>
      <Header onCart={false} />
      <Typography margin="30px" variant="h3">
        Smartphones
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginLeft: "3em" }}
      >
        <ListProducts
          cartItem={false}
          products={onSearch ? searchProducts : products}
        />
        {searchProducts.length < 1 && onSearch && (
          <Typography>Nenhum item corresponde a busca</Typography>
        )}
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      <Footer />
    </Box>
  );
};
