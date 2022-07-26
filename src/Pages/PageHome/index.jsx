import ListProducts from "../../Components/List Products";
import { Header } from "../../Components/Header/index.jsx";
import { ProductsContext } from "../../Providers/Products";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const PageHome = () => {
  const { products, searchProducts, onSearch } = useContext(ProductsContext);
  console.log(onSearch);
  return (
    <Box>
      <Header onCart={false} />
      <Typography margin="30px" variant="h3">
        Eletronics
      </Typography>
      <Box>
        <ListProducts
          cartItem={false}
          products={onSearch ? searchProducts : products}
        />
        {searchProducts.length < 1 && onSearch && (
          <Typography>Nenhum item corresponde a busca</Typography>
        )}
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
};

export default PageHome;
