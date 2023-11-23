import { useRouter } from "next/router";
import Button from "@mui/material/Button";
const Login = () => {
  const router = useRouter();
  const getId = router.query.login;
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Welcome login &nbsp;{getId}</h1>
      <Button onClick={handleLogout} variant="contained" color="error">
        Log out
      </Button>
    </div>
  );
};

export default Login;
