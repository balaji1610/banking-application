import Button from "@mui/material/Button";
import LogoutButtonStyle from "../../styles/LogoutButton.module.css";
export default function LogoutButton({ handleLogout, getId }) {
  return (
    <div className={LogoutButtonStyle.LogoutButtonStyle_flex}>
      <div>
        {" "}
        <p> {getId}</p>
      </div>
      <div>
        {" "}
        <Button onClick={handleLogout} variant="contained" color="primary">
          Log out
        </Button>
      </div>
    </div>
  );
}
