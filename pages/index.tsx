import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
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
          <div>
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

            <Button onClick={handleLogin} variant="contained" color="primary">
              Log In
            </Button>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
