import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarStyle from "../../styles/Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
export default function Sidebar() {
  const [Togglemenu, setTogglemenu] = useState(true);

  const MenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTogglemenu(!Togglemenu);
  };

  return (
    <div>
      <div onClick={MenuClick} className={SidebarStyle.Hamburger_menu}>
        {" "}
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={SidebarStyle.menu_list_parent}>
        <div></div>
      </div>
    </div>
  );
}
