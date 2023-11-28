import { useRouter } from "next/router";
import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LogoutButton from "../../Container/Dashboard/LogoutButton";
import ContentBoardStyle from "../../styles/ContenBoard.module.css";
import LoginStyle from "../../styles/Login.module.css";
import ContentBoard from "../../Container/Dashboard/ContentBoard";
import ContextAPi from "../../ContextAPI/Context";
import Sidebar from "../../Container/Dashboard/Sidebar";
import Menu1 from "../../Container/Dashboard/Menu1";
import BankingPage from "../../Container/Banking/BankingPage";
import Head from "next/head";
import { useContext } from "react";

const Login = () => {
  const [Togglemenu, setTogglemenu] = useState(true);

  const MenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setTogglemenu(!Togglemenu);
  };
  const router = useRouter();
  const getId = router.query.login;

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <BrowserRouter>
      {" "}
      <div className={LoginStyle.login_parent_bg}>
        <Head>
          <title>Dashboard</title>
        </Head>{" "}
        <ContextAPi>
          <Grid container spacing={2}>
            <Grid item xs={Togglemenu ? 2 : 1}>
              <Sidebar MenuClick={MenuClick} Togglemenu={Togglemenu} />
            </Grid>
            <Grid item xs={Togglemenu ? 10 : 11}>
              <div className={ContentBoardStyle.ContentBoard_Parent}>
                <div>
                  {" "}
                  <LogoutButton handleLogout={handleLogout} getId={getId} />
                </div>
                <div>
                  <Routes>
                    <Route
                      path={`/login/${getId}`}
                      element={<ContentBoard />}
                    />

                    <Route path="/aboutme" element={<Menu1 />} />
                    <Route
                      path={`/login/${getId}/banking`}
                      element={<BankingPage />}
                    />
                  </Routes>
                </div>
              </div>
            </Grid>
          </Grid>
        </ContextAPi>
      </div>
    </BrowserRouter>
  );
};

export default Login;
