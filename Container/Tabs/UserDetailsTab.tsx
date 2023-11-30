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
                      FIRST NAME :
                    </div>
                    <div>{fistname}</div>
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
                      LAST NAME :
                    </div>
                    <div>{lastname}</div>
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
                      EMAIL :
                    </div>
                    <div>{email}</div>
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
                      MOBILE :
                    </div>
                    <div>{mobile}</div>
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
