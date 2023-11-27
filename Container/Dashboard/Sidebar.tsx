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
  const [mouseEvent, setmouseEvent] = useState("true");
  const { RouterPath } = useContext(ApplicationProps);

  const [Hoverindex, setHoverindex] = useState(-1);
  const [Navarray, setNavarray] = useState([
    {
      link: `/login/${RouterPath}`,
      icon: <Home />,
      text: "Home",
    },
    {
      link: "/aboutme",
      icon: <Dashboard />,
      text: "Dashboard",
    },
  ]);
  const MenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTogglemenu(!Togglemenu);
  };
  const router = useRouter();

  const ClickRouter = () => {
    router.push("/aboutme");
  };

  const MouseEnter = (e, index) => {
    setHoverindex(index);
  };
  const MouseLeave = () => {
    setHoverindex(-1);
  };

  return (
    <div>
      <div onClick={MenuClick} className={SidebarStyle.Hamburger_menu}>
        {" "}
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/cotton/64/menu.png"
          alt="menu"
          style={{ cursor: "pointer" }}
        />
        {/* <IconButton>
          <MenuIcon />
        </IconButton> */}
      </div>
      <div>
        <List>
          {Togglemenu ? (
            <div className={SidebarStyle.menu_content_list}>
              {Navarray.map((el, index) => {
                return (
                  <>
                    {" "}
                    <Link to={el.link} className={SidebarStyle.link_router}>
                      <ListItem
                        onMouseEnter={(e) => MouseEnter(e, index)}
                        onMouseLeave={MouseLeave}
                        style={{
                          backgroundColor: Hoverindex == index && "#F5F5F5",
                          borderRadius: Hoverindex == index && "10px",
                        }}
                      >
                        <ListItemIcon>{el.icon}</ListItemIcon>
                        <ListItemText primary={el.text} />
                      </ListItem>
                    </Link>
                  </>
                );
              })}{" "}
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
