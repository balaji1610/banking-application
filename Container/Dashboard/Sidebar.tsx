import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarStyle from "../../styles/Sidebar.module.css";
import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const [Togglemenu, setTogglemenu] = useState(true);
  const { RouterPath } = useContext(ApplicationProps);
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
        <div>
          <div>
            <Link to={`/login/${RouterPath}`}>Home</Link>
          </div>

          <div>
            {" "}
            <Link to="/aboutme">Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
