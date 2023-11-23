import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const getId = router.query.login;
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Welcome login{getId}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
