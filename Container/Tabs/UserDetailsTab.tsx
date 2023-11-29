import BankingPageStyle from "../../styles/BankingPageStyle";
import { useContext, useState } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CardActionArea } from "@mui/material";

export default function UserDetailsTab() {
  const { ViewGetData } = useContext(ApplicationProps);
  console.log(ViewGetData, "ViewGetData");

  const { fistname, lastname, email, mobile } = ViewGetData;
  return (
    <div style={BankingPageStyle.UserDetailsTabDev as React.CSSProperties}>
      <div>
        <Card
          sx={{
            width: "40rem",
            height: "7rem",
            border: "1px solid #000000",
            borderRadius: "10px",
          }}
        >
          <CardActionArea>
            <CardContent>
              <div
                style={BankingPageStyle.userDetailsCard1 as React.CSSProperties}
              >
                <div>
                  FistName:&nbsp;&nbsp;
                  {fistname}
                </div>
                <div>LastName:&nbsp;&nbsp;{lastname}</div>
              </div>
              <div
                style={BankingPageStyle.userDetailsCard1 as React.CSSProperties}
              >
                <div>Email:&nbsp;&nbsp;{email}</div>
                <div>Mobile:&nbsp;&nbsp;{mobile}</div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
