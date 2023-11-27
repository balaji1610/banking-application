import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import Button from "@mui/material/Button";
import LogoutButtonStyle from "../../styles/LogoutButton.module.css";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
export default function LogoutButton({ handleLogout, getId }) {
  const { TableArray, setRouterPath, RouterPath } =
    useContext(ApplicationProps);
  setRouterPath(getId);
  console.log(TableArray);

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
        <img
          onClick={handleLogout}
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/shutdown--v1.png"
          alt="shutdown--v1"
          title="Logout"
          style={{ marginRight: "15px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
