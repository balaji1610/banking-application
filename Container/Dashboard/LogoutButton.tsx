import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import Button from "@mui/material/Button";
import LogoutButtonStyle from "../../styles/LogoutButton.module.css";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
export default function LogoutButton({ handleLogout, getId }) {
  const { TableArray, setRouterPath, RouterPath } =
    useContext(ApplicationProps);
  setRouterPath(getId);



  return (
    <div className={LogoutButtonStyle.LogoutButtonStyle_flex}>
      <div>
        {" "}
        <div className={LogoutButtonStyle.user_imageFlex}>
          <div>
            <img
              width="54"
              height="54"
              src="https://img.icons8.com/3d-fluency/94/user-male-circle.png"
              alt="administrator-male--v1"
            />
          </div>
          <div className={LogoutButtonStyle.user_name}>{getId}</div>
        </div>
      </div>
      <div>
        {" "}
        <Button
          variant="contained"
          onClick={handleLogout}
          color="error"
          style={{ marginRight: "15px" }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
