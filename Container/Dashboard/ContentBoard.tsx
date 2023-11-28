import ContenBoardStyle from "../../styles/ContenBoard.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModelComp from "../../components/Model_Comp";
import Table from "./Table";
import { Button } from "@mui/material";
export default function ContentBoard() {
  const [open, setOpen] = useState(false);

  const handleModelOpen = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className={ContenBoardStyle.AddBtn_style}>
        <div onClick={handleModelOpen}>
          <Button variant="contained" color="success">
            Add Customer
          </Button>
          {/* <AddCircleOutlineIcon
            fontSize="large"
            style={{ cursor: "pointer", color: "#ffffff", fontSize: "3rem" }}
          /> */}
        </div>
      </div>

      <ModelComp
        open={open}
        setOpen={setOpen}
        handleClose={handleCloseClick}
        title="ADD CUSTOMER"
      />

      <div className={ContenBoardStyle.Table_style}>
        <Table />
      </div>
    </div>
  );
}
