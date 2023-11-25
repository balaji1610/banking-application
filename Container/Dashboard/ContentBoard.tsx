import ContenBoardStyle from "../../styles/ContenBoard.module.css";

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
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/add--v1.png"
            alt="add--v1"
          />
        </div>
      </div>

      <ModelComp open={open} handleClose={handleCloseClick} />

      <div className={ContenBoardStyle.Table_style}>
        <Table  />
      </div>
    </div>
  );
}
