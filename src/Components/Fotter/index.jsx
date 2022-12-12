import BottomNavigation from "@mui/material/BottomNavigation";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export const Footer = () => {
  return (
    <BottomNavigationAction
      showLabel={true}
      label="Contato:"
      icon={<AddIcCallIcon color="secondary" />}
    />
  );
};
