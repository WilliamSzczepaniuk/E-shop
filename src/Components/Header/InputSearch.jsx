import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/Products";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { alpha } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      border: "red 1px solid",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "28ch",
        },
      },
    },
    search: {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(2),
        width: "20%",
      },
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
      left: 200,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
export const InputSearch = () => {
  const { products, changeProducts, onSearch, setOnSearch } =
    useContext(ProductsContext);
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setOnSearch(true);
    const searchValue = products.filter((product) => {
      let includes = false;
      product.title
        .toLowerCase()
        .split(" ")
        .forEach((string) => {
          const subStrings = string.slice(0, inputValue.length);
          if (subStrings === inputValue.toLowerCase()) {
            return (includes = true);
          }
        });
      return includes;
    });
    return changeProducts(searchValue);
  };
  return (
    <InputBase
      color="info"
      value={inputValue}
      onKeyUp={(e) => handleChange(e)}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      // sx={{
      //   color: "inherit",
      //   boxShadow: onSearch ? "0px 4px 7px -4px #000000" : "none",
      // }}
      inputProps={{ "aria-label": "search" }}
      placeholder="Search..."
      className={classes.input}
    >
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box>
      </Box>
    </InputBase>
  );
};
