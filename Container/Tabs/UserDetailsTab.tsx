import BankingPageStyle from "../../styles/BankingPageStyle";
import { useContext, useState } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CardActionArea } from "@mui/material";
import fontStyle from "../../styles/fontStyle.module.css";
export default function UserDetailsTab() {
  const { ViewGetData } = useContext(ApplicationProps);

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
            backgroundColor: "#F0F4C3",
          }}
        >
          <CardActionArea>
            <CardContent>
              <div
                style={BankingPageStyle.userDetailGrid1 as React.CSSProperties}
              >
                <div>
                  <div
                    style={
                      BankingPageStyle.userDetailsCard1 as React.CSSProperties
                    }
                  >
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      <Typography variant="subtitle1">FIRST NAME :</Typography>
                    </div>
                    <div>
                      {" "}
                      <Typography variant="subtitle1"> {fistname} :</Typography>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    style={
                      BankingPageStyle.userDetailsCard1 as React.CSSProperties
                    }
                  >
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      <Typography variant="subtitle1"> LAST NAME :</Typography>
                    </div>
                    <div>
                      {" "}
                      <Typography variant="subtitle1"> {lastname}</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={BankingPageStyle.userDetailGrid1 as React.CSSProperties}
              >
                <div>
                  <div
                    style={
                      BankingPageStyle.userDetailsCard1 as React.CSSProperties
                    }
                  >
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      <Typography variant="subtitle1"> EMAIL :</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1"> {email}</Typography>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    style={
                      BankingPageStyle.userDetailsCard1 as React.CSSProperties
                    }
                  >
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      <Typography variant="subtitle1"> MOBILE :</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1"> {mobile}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
