import { Button } from "@mui/material";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import BankingPageStyle from "../../styles/BankingPageStyle";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserDetailsTab from "../Tabs/UserDetailsTab";
import BankDetailsTab from "../Tabs/BankDetailsTab";

export default function BankingPage() {
  const { RouterPath, ViewGetData } = useContext(ApplicationProps);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let getTabCompoent = {
    0: <UserDetailsTab />,
    1: <BankDetailsTab />,
  };
  console.log(getTabCompoent[value]);
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

      <div style={BankingPageStyle.tabStyle as React.CSSProperties}>
        {" "}
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="USER DETAILS" style={BankingPageStyle.tabLabelStyle} />
          <Tab label="BANK DETAILS" style={BankingPageStyle.tabLabelStyle} />
        </Tabs>
        <div>{getTabCompoent[value]}</div>
      </div>
    </div>
  );
}
