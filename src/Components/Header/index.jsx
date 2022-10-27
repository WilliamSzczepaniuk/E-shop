import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/Products";
import { InputSearch } from "./InputSearch";
import { Menu } from "./Menu.jsx";
import Box from "@mui/material/Box";
import Shop from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import LazuliLogo from "../../assets/LazuliLogo.jpeg";
import SearchIcon from "@material-ui/icons/Search";
import MenuSharp from "@material-ui/icons/MenuSharp";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Buttons: {
    backgroundColor: "white",
  },
  Icons: {
    marginLeft: 1,
    color: "black",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "black",
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  // search: {
  //   backgroundColor: alpha(theme.palette.common.white, 0.2),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   position: "relative",
  //   [theme.breakpoints.up("sm")]: {
  //     padding: theme.spacing(2),
  //     width: "20%",
  //   },
  //   marginLeft: 0,
  //   marginRight: 10,
  //   borderRadius: theme.shape.borderRadius,
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   left: 200,
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          >
            <Menu toggle={toggle} />
            <Avatar sx={{ width: "50px" }} variant="rounded" src={LazuliLogo} />
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              color="secondary"
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
                  color="secondary"
                  className={classes.Buttons}
                  onClick={routesButton}
                  sx={{ backgroundColor: "white" }}
                  startIcon={
                    !onCart ? (
                      <Shop className={classes.Icons} />
                    ) : (
                      <HomeIcon className={classes.Icons} />
                    )
                  }
                  variant="contained"
                />
              </Badge>
            </IconButton>
          </Box>
          <MenuSharp className={classes.Icons} />
        </Toolbar>
      </AppBar>
      {/* <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box> */}
      {/* <InputSearch /> */}
      {/* </Box> */}
    </div>
  );
};
