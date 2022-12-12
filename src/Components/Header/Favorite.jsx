import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Favorite = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate("/favorites")}
        sx={{ fontSize: "10px", alignContent: "center", color: "red" }}
        endIcon={<FavoriteIcon />}
      />
    </Box>
  );
};
