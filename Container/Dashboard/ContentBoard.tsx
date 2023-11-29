import ContenBoardStyle from "../../styles/ContenBoard.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModelComp from "../../components/Model_Comp";
import Table from "./Table";
import { Button } from "@mui/material";
import AddForm from "./AddForm";
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
        <div className={ContenBoardStyle.customer_Text_style}>
          <h1>CUSTOMERS</h1>
        </div>
        <div onClick={handleModelOpen}>
          <Button variant="contained" color="success">
            Add Customer
          </Button>
        </div>
      </div>

      <ModelComp
        open={open}
        setOpen={setOpen}
        handleClose={handleCloseClick}
        title="ADD CUSTOMER"
        component={<AddForm setOpen={setOpen} handleClose={handleCloseClick} />}
      />

      <div className={ContenBoardStyle.Table_style}>
        <Table />
      </div>
    </div>
  );
}
