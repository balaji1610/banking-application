import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import LogoutButton from "../../Container/Dashboard/LogoutButton";
import ContentBoardStyle from "../../styles/ContenBoard.module.css";
import ContentBoard from "../../Container/Dashboard/ContentBoard";
const Login = () => {
  const router = useRouter();
  const getId = router.query.login;
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          Sidbar
        </Grid>
        <Grid item xs={9}>
          <div className={ContentBoardStyle.ContentBoard_Parent}>
            <div>
              {" "}
              <LogoutButton handleLogout={handleLogout} getId={getId} />
            </div>
            <div>
              <ContentBoard />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
