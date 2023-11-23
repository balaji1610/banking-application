import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

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
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
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
  );
}
