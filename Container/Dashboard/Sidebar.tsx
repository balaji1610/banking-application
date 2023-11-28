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
export default function Sidebar({ MenuClick, Togglemenu }) {
  const [mouseEvent, setmouseEvent] = useState("true");
  const { RouterPath } = useContext(ApplicationProps);

  const [Hoverindex, setHoverindex] = useState(-1);

  const [Navarray, setNavarray] = useState([
    {
      link: `/login/${RouterPath}`,
      icon: <Home />,
      iconOnly: <Home fontSize="large" className={SidebarStyle.icon_only} />,
      text: "Home",
      hovericon: <Home color="primary" />,
      hovericonOnly: (
        <Home
          color="primary"
          fontSize="large"
          className={SidebarStyle.icon_only}
        />
      ),
    },
    {
      link: "/aboutme",
      icon: <Dashboard />,
      iconOnly: (
        <Dashboard fontSize="large" className={SidebarStyle.icon_only} />
      ),
      text: "Dashboard",
      hovericon: <Dashboard color="primary" />,
      hovericonOnly: (
        <Dashboard
          color="primary"
          fontSize="large"
          className={SidebarStyle.icon_only}
        />
      ),
    },
  ]);

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
      </div>
      <div>
        <List>
          {Togglemenu ? (
            <div className={SidebarStyle.menu_content_list}>
              {Navarray.map((el, index) => {
                return (
                  <>
                    {" "}
                    <Link
                      to={el.text == "Home" ? `/login/${RouterPath}` : el.link}
                      className={SidebarStyle.link_router}
                    >
                      <ListItem
                        onMouseEnter={(e) => MouseEnter(e, index)}
                        onMouseLeave={MouseLeave}
                        style={{
                          backgroundColor: Hoverindex == index && "#F5F5F5",
                          borderRadius: Hoverindex == index && "10px",
                        }}
                      >
                        <ListItemIcon style={{ height: "20px" }}>
                          {Hoverindex == index ? el.hovericon : el.icon}
                        </ListItemIcon>
                        <ListItemText primary={el.text} />
                      </ListItem>
                    </Link>
                  </>
                );
              })}{" "}
            </div>
          ) : (
            <div className={SidebarStyle.icons_list}>
              {Navarray.map((el, index) => {
                return (
                  <>
                    {" "}
                    <Link
                      to={el.text == "Home" ? `/login/${RouterPath}` : el.link}
                      className={SidebarStyle.link_router}
                    >
                      {" "}
                      <ListItem
                        onMouseEnter={(e) => MouseEnter(e, index)}
                        onMouseLeave={MouseLeave}
                        style={{
                          backgroundColor: Hoverindex == index && "#F5F5F5",
                          borderRadius: Hoverindex == index && "10px",
                        }}
                      >
                        <ListItemIcon>
                          {/* <Home
                            fontSize="large"
                            style={{
                              marginLeft: "20px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          /> */}
                          {Hoverindex == index ? el.hovericonOnly : el.iconOnly}
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  </>
                );
              })}
            </div>
          )}
        </List>
      </div>
    </div>
  );
}
