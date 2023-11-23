import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Createaccount from "../Container/Createaccount";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [Banking, setBanking] = useState(() => {
    return JSON.parse(localStorage.getItem("Banking")) || [];
  });
  const [items, setItems] = useState(-1);

  useEffect(() => {
    localStorage.setItem("Banking", JSON.stringify(Banking));
  }, [items]);
  const handleLogin = () => {
    setBanking([...Banking, { name: username, pwd: password }]);
    setItems(items + 1);
    router.push(`/login/${username}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      <hr />
      <div>
        <Createaccount value={Banking} />
      </div>
    </div>
  );
};

export default Login;
