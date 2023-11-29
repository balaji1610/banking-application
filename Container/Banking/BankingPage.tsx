import { Button } from "@mui/material";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import BankingPageStyle from "../../styles/BankingPageStyle";
import Link from "@mui/material/Link";

export default function BankingPage() {
  const { RouterPath, ViewGetData } = useContext(ApplicationProps);

  return (
    <div style={BankingPageStyle.parent}>
      <div style={BankingPageStyle.breadcrumb as React.CSSProperties}>
        <Breadcrumbs saria-label="breadcrumb">
          <RouterLink to={`/login/${RouterPath}`}>
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" color="primary" />
              Home
            </Link>
          </RouterLink>

          <Link underline="hover" color="inherit">
            BANK DETAILS
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}
