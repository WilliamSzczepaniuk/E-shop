import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState } from "react";
import { ProductsContext } from "../../Providers/Products";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { alpha } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  BoxPrimary: {
    position: "relative",
    width: "100%",
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
    },
    marginLeft: 0,
    marginRight: 0,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    display: "flex",
    justifyContent: "end",
  },
  boxIcon: {
    [theme.breakpoints.up("xs")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
    marginTop: "10px",
    position: "relative",
    maxWidth: "300px",
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
    borderRadius: "20px",
    boxShadow: "10px 5px 10px 3px rgba(244, 204, 255, 1)",
    "& input::placeholder": { color: "black", fontSize: "18px" },
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1.3em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "26ch",
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
    <Box className={classes.BoxPrimary}>
      <Box className={classes.boxIcon}>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box>
        <InputBase
          value={inputValue}
          onKeyUp={(e) => handleChange(e)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          inputProps={{ "aria-label": "search" }}
          placeholder="Search..."
          className={classes.input}
        />
      </Box>
    </Box>
  );
};
