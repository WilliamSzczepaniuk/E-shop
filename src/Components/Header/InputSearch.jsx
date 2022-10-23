import InputBase from "@mui/material/InputBase";
import { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/Products";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  input: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "28ch",
        },
      },
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
      value={inputValue}
      onKeyUp={(e) => handleChange(e)}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      // sx={{
      //   color: "inherit",
      //   boxShadow: onSearch ? "0px 4px 7px -4px #000000" : "none",
      // }}
      _placeholder={{ color: "white" }}
      inputProps={{ "aria-label": "search" }}
      placeholder="Search..."
      className={classes.input}
    />
  );
};
