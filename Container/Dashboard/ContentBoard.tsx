import ContenBoardStyle from "../../styles/ContenBoard.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModelComp from "../../components/Model_Comp";
import Table from "./Table";
export default function ContentBoard() {
  const [open, setOpen] = useState(false);

  const handleModelOpen = () => {
    setOpen(true);
  };

  const handleCloseClick = (): void => {
    setOpen(false);
  };
  return (
    <div>
      <div className={ContenBoardStyle.AddBtn_style}>
        <div onClick={handleModelOpen}>
          <AddCircleOutlineIcon
            fontSize="large"
            style={{ cursor: "pointer", color: "#ffffff", fontSize: "3rem" }}
          />
        </div>
      </div>

      <ModelComp open={open} handleClose={handleCloseClick} />

      <div className={ContenBoardStyle.Table_style}>
        <Table />
      </div>
    </div>
  );
}
