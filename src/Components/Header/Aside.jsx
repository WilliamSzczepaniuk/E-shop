import List from "@mui/material/List";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuSharp from "@material-ui/icons/MenuSharp";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const options = ["Profile", "Home", "Favoritos"];
export const Aside = ({ toggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(undefined);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    return setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : "undefined"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        component="span"
        color="secondary"
        startIcon={<MenuSharp />}
      />
      <Menu
        sx={{
          background: "rgba( 255, 255, 255, 0.35 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 13.5px )",
          WebkitBackdropFilter: "blur( 13.5px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        anchorEl={anchorEl}
        id="basic-menu"
        onClose={handleClose}
        open={open}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <Box sx={{ backgroundColor: "#9c27b0" }}>
          <List
            component={"nav"}
            sx={{
              height: { xs: "100vh" },
              width: { xs: "100vw", md: "500px" },
            }}
          >
            {options.map((option, i) => (
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={i}
              >
                {option}
              </MenuItem>
            ))}
          </List>
        </Box>
      </Menu>
    </>
  );
};
