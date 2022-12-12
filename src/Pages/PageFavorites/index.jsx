import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Header } from "../../Components/Header";

export const PageFavorites = () => {
  return (
    <Box>
      <Header />
      <Typography color={"secondary"} mt={5} variant="h6">
        Ops...
      </Typography>
      <Typography variant="h7"> Sua lista de favoritos está vazia.</Typography>
    </Box>
  );
};
