import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarStyle from "../../styles/Sidebar.module.css";
import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import HomeIcon from "@mui/icons-material/Home";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Dashboard } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Sidebar() {
  const [Togglemenu, setTogglemenu] = useState(true);
  const { RouterPath } = useContext(ApplicationProps);
  const MenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTogglemenu(!Togglemenu);
  };
  const router = useRouter();

  const ClickRouter = () => {
    router.push("/aboutme");
  };
  return (
    <div>
      <div onClick={MenuClick} className={SidebarStyle.Hamburger_menu}>
        {" "}
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div>
        {/* <div>
          <div>
            <Link to={`/login/${RouterPath}`}>Home</Link>
          </div>

          <div>
            {" "}
            <Link to="/aboutme">Dashboard</Link>
          </div>
        </div> */}
        <List>
          {Togglemenu ? (
            <div className={SidebarStyle.menu_content_list}>
              <Link
                to={`/login/${RouterPath}`}
                className={SidebarStyle.link_router}
              >
                <ListItem>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>{" "}
              <Link to="/aboutme" className={SidebarStyle.link_router}>
                {" "}
                <ListItem>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
            </div>
          ) : (
            <div className={SidebarStyle.icons_list}>
              <Link
                to={`/login/${RouterPath}`}
                className={SidebarStyle.link_router}
              >
                {" "}
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                </ListItem>
              </Link>
              <Link to="/aboutme" className={SidebarStyle.link_router}>
                <ListItem button>
                  {" "}
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </div>
          )}
        </List>
      </div>
    </div>
  );
}
