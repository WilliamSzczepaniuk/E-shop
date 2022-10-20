import BottomNavigation from "@mui/material/BottomNavigation";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export const Footer = () => {
  return (
    <BottomNavigation
      sx={{ justifyContent: "initial" }}
      className=".MuiBottomNavigation-root"
    >
      <BottomNavigationAction
        className={".MuiBottomNavigationAction-root"}
        showLabel={true}
        label="Contato:"
        icon={<AddIcCallIcon />}
      />
    </BottomNavigation>
  );
};
