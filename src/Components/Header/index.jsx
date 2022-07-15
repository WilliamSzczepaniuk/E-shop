import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Shop from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

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

  input: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "28ch",
        },
      },
    },
  },
}));
export const Header = ({ onCart = false }) => {
  const [inputValue, setInputValue] = useState("");
  const { productsCart } = useContext(CartContext);
  const navigate = useNavigate();

  const routesButton = () => {
    onCart === true ? navigate("/") : navigate("/cart");
  };

  const handleChange = (ev) => {
    setInputValue(ev.target.value);
  };

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
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
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
            <InputBase
              _placeholder={{ color: "white" }}
              inputProps={{ "aria-label": "search" }}
              placeholder="Search..."
              className={classes.input}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              edge="end"
              aria-label="Go to shopping cart"
              size="large"
            >
              <Badge color="error" badgeContent={productsCart.length}>
                <Button
                  onClick={routesButton}
                  startIcon={<Shop />}
                  variant="contained"
                >
                  Cart
                </Button>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
