import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Shop from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import { CartContext } from "../../Providers/Cart";
import HomeIcon from "@mui/icons-material/Home";
import { ProductsContext } from "../../Providers/Products";
import { InputSearch } from "./InputSearch";
import { Menu } from "./Menu.jsx";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    position: "relative",
    width: "100%",
    marginLeft: 0,
    marginRight: 10,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    <div className={classes.grow} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          >
            <Menu toggle={toggle} />
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.menuButton}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LazuliShop
          </Typography>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputSearch />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              component={"div"}
              edge="end"
              aria-label="Go to shopping cart"
              size="large"
            >
              <Badge
                component={"div"}
                color="error"
                badgeContent={productsCart.length}
              >
                <Button
                  onClick={routesButton}
                  startIcon={!onCart ? <Shop /> : <HomeIcon />}
                  variant="contained"
                >
                  {!onCart ? "Cart" : "Home"}
                </Button>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
