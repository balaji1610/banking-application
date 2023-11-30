import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Text from "../../components/Text";
export default function BasicTable() {
  const { RouterPath, TableArray, ViewGetData, setViewGetData, setGetindex } =
    useContext(ApplicationProps);

  const viewClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    getData: {},
    getIndex
  ) => {
    setViewGetData(getData);
    setGetindex(getIndex);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ height: "35rem", overflow: "scroll", overflowX: "hidden" }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: 650,
          border: "2px solid #ffffff",
          heigh: "10px",
          "& th": {
            color: "#ffffff",
            backgroundColor: "#000000",
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
            <TableCell>Fist Name </TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>{" "}
        <TableBody>
          {TableArray.map((el, index) => (
            <TableRow>
              <TableCell>{el.fistname}</TableCell>
              <TableCell>{el.lastname}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.mobile}</TableCell>
              <TableCell>
                <Link
                  to={`/login/${RouterPath}/banking`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <Button
                    onClick={(e) => viewClick(e, el, index)}
                    variant="contained"
                  >
                    View
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
