import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Popper from "@material-ui/core/Popper";
export const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Home</MenuItem>
        </MenuList>
      ) : (
        ""
      )}
    </>
  );
};
