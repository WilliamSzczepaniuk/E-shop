import ListProducts from "../../Components/List Products";
import { Header } from "../../Components/Header/index.jsx";
import { ProductsContext } from "../../Providers/Products";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PageHome = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Box>
      <Header onCart={false} />
      <Typography margin="30px" variant="h3">Eletronics</Typography>
      <Box>
        <ListProducts cartItem={false} products={products} />
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
};

export default PageHome;
