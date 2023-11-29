import { Button } from "@mui/material";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BankingPageStyle from "../../styles/BankingPageStyle";
export default function BankingPage() {
  const { RouterPath, ViewGetData } = useContext(ApplicationProps);

  return (
    <div style={BankingPageStyle.parent}>
      <Link to={`/login/${RouterPath}`}>
        {" "}
        <Button variant="contained" color="error">
          Back
        </Button>
      </Link>
    </div>
  );
}
