import Button from "@mui/material/Button";
import LogoutButtonStyle from "../../styles/LogoutButton.module.css";
export default function LogoutButton({ handleLogout, getId }) {
  return (
    <div className={LogoutButtonStyle.LogoutButtonStyle_flex}>
      <div>
        {" "}
        <div className={LogoutButtonStyle.user_imageFlex}>
          <div>
            <img
              width="54"
              height="54"
              src="https://img.icons8.com/3d-fluency/94/administrator-male--v1.png"
              alt="administrator-male--v1"
            />
          </div>
          <div className={LogoutButtonStyle.user_name}>{getId}</div>
        </div>
      </div>
      <div>
        {" "}
        <Button onClick={handleLogout} variant="contained" color="error">
          Log out
        </Button>
      </div>
    </div>
  );
}
