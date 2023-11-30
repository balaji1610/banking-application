import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Text from "../../components/Text";
import BankingPageStyle from "../../styles/BankingPageStyle.ts";
export default function BankTable({ bankingArray, currentIndex, InvokeHook }) {
  let getLength = bankingArray[currentIndex].BankingData.length;

  return (
    <div>
      {getLength >= 1 ? (
        <div>
          <TableContainer
            component={Paper}
            style={{
              minHeight: "10rem",
              maxHeight: "15rem",
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            <Table
              stickyHeader
              sx={{
                minWidth: 650,
                border: "2px solid #ffffff",
                heigh: "10px",
                "& th": {
                  color: "#ffffff",
                  backgroundColor: "#2563eb",
                  fontSize: "large",
                  fontWeight: "bold",
                },
                "& tr": {
                  fontSize: "15px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Text label="ACCOUNT NUMBER" variant="h6" />{" "}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Text label="ACCOUNT NAME" variant="h6" />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Text label="NICK NAME" variant="h6" />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Text label="IFSC" variant="h6" />
                  </TableCell>
                </TableRow>
              </TableHead>{" "}
              <TableBody>
                {bankingArray[currentIndex].BankingData.map((el, index) => (
                  <TableRow>
                    <TableCell>
                      {" "}
                      <Text label={el.accountNumber} variant="body1" />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Text label={el.accountName} variant="body1" />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Text label={el.nickName} variant="body1" />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Text label={el.Ifsc} variant="body1" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div style={BankingPageStyle.NoRecords}>
          <h1>* NO RECORDS *</h1>
        </div>
      )}
    </div>
  );
}
