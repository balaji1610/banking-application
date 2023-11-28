import { Button } from "@mui/material";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function BankingPage() {
  const { RouterPath, ViewGetData } = useContext(ApplicationProps);

  console.log(ViewGetData, "ViewGetData");
  return (
    <div>
      <Link to={`/login/${RouterPath}`}>
        {" "}
        <Button variant="contained" color="error">
          Back
        </Button>
      </Link>

      <h1>BankingPage</h1>
    </div>
  );
}
