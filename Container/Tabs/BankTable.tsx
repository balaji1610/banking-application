import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function BankTable({ bankingArray, currentIndex, InvokeHook }) {
  let getLength = bankingArray[currentIndex].BankingData.length;

  return (
    <div>
      {getLength >= 1 ? (
        <div>
          <h1>Table Here</h1>
          <TableContainer
            component={Paper}
            style={{ height: "22rem", overflow: "scroll", overflowX: "hidden" }}
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
                  <TableCell>AccountNumber </TableCell>
                  <TableCell>AccountName</TableCell>

                  <TableCell>NickName</TableCell>
                  <TableCell>Ifsc</TableCell>
                </TableRow>
              </TableHead>{" "}
              <TableBody>
                {bankingArray[currentIndex].BankingData.map((el, index) => (
                  <TableRow>
                    <TableCell>{el.accountNumber}</TableCell>
                    <TableCell>{el.accountName}</TableCell>
                    <TableCell>{el.nickName}</TableCell>
                    <TableCell>{el.Ifsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>
          <h1>NO Data</h1>
        </div>
      )}
    </div>
  );
}
