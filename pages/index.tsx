import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoginStyle from "../styles/Login.module.css";
export default function Login() {
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = () => {
    router.push(`/login/${credentials.username.split("@")[0]}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setcredentials({ ...credentials, [name]: value });
  };
  const { username, password } = credentials;

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={LoginStyle.Card}>
            <div className={LoginStyle.LoginGrid}>
              <div className={LoginStyle.login_align}>
                <h1>Login</h1>
              </div>
              <div className={LoginStyle.input_align}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className={LoginStyle.input_align}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className={LoginStyle.input_align}>
                {" "}
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  color="primary"
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
