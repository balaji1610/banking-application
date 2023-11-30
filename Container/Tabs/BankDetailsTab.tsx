import BankingPageStyle from "../../styles/BankingPageStyle";
import { Button } from "@mui/material";
import { useState } from "react";
import Model_Comp from "../../components/Model_Comp";
import AddBankForm from "../Dashboard/AddBankForm";
import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import BankTable from "./BankTable";
export default function BankDetailsTab() {
  //model
  const [AddBankopen, setAddBankOpen] = useState(false);
  const { TableArray, Getindex, InvokeHook } = useContext(ApplicationProps);

  const handleModelOpen = () => {
    setAddBankOpen(true);
  };

  const handleCloseClick = () => {
    setAddBankOpen(false);
  };
  return (
    <div style={BankingPageStyle.BankDetailsTabDev as React.CSSProperties}>
      <div style={BankingPageStyle.Addbank as React.CSSProperties}>
        <Button onClick={handleModelOpen} variant="contained" color="success">
          Add Bank Details
        </Button>
      </div>

      <Model_Comp
        open={AddBankopen}
        setOpen={setAddBankOpen}
        handleClose={handleCloseClick}
        title="ADD BANK DETAILS"
        component={
          <AddBankForm
            setOpen={setAddBankOpen}
            handleClose={handleCloseClick}
          />
        }
      />

      <div>
        <BankTable
          bankingArray={TableArray}
          currentIndex={Getindex}
          InvokeHook={InvokeHook}
        />
      </div>
    </div>
  );
}
