import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/Products";
import { InputSearch } from "./InputSearch";
import { Aside } from "./Aside.jsx";
import Box from "@mui/material/Box";
import Shop from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import { Favorite } from "../Header/Favorite";
import MenuSharp from "@material-ui/icons/MenuSharp";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    color: "black",
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "#7b1fa2",
    },
  },
  buttons: {
    boxShadow: "1px 2px 12px 1px rgba(244, 204, 255, 1)",
  },
  Icons: {
    marginLeft: 1,
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
export const Header = ({ onCart = false }) => {
  const { productsCart } = useContext(CartContext);

  useContext(ProductsContext);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const routesButton = () => (onCart ? navigate("/") : navigate("/cart"));

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        sx={{ boxShadow: "1px 3px 12px 1px rgba(244, 204, 255, 1)" }}
        position="static"
        color="transparent"
        className={classes.boxPrincipal}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          ></IconButton>
          <Aside toggle={toggle} />
          <Typography
            className={classes.menuButton}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LazuliShop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Favorite />

            <Badge
              component={"div"}
              color="error"
              badgeContent={productsCart.length}
            >
              {" "}
            </Badge>
            <Button
              color="secondary"
              className={classes.buttons}
              onClick={routesButton}
              startIcon={
                !onCart ? (
                  <Shop className={classes.Icons} />
                ) : (
                  <HomeIcon className={classes.Icons} />
                )
              }
              variant="contained"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <InputSearch />
    </div>
  );
};
