import { Button } from "@mui/material";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import BankingPageStyle from "../../styles/BankingPageStyle";
import Link from "@mui/material/Link";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserDetailsTab from "../Tabs/UserDetailsTab";
import BankDetailsTab from "../Tabs/BankDetailsTab";

export default function BankingPage() {
  const { RouterPath, ViewGetData } = useContext(ApplicationProps);
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let getTabCompoent = {
    0: <UserDetailsTab />,
    1: <BankDetailsTab />,
  };

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
            Bank Details
          </Link>
        </Breadcrumbs>
      </div>

      <div>
        {" "}
        <TabContext value={value}>
          <div style={BankingPageStyle.tabStyle as React.CSSProperties}>
            <TabList onChange={handleChange}>
              <Tab
                label="User Details"
                value="1"
                style={BankingPageStyle.tabLabelStyle}
              />
              <Tab
                label="Bank Details"
                value="2"
                style={BankingPageStyle.tabLabelStyle}
              />
            </TabList>
          </div>

          <TabPanel value="1">
            <UserDetailsTab />
          </TabPanel>
          <TabPanel value="2">
            <BankDetailsTab />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
