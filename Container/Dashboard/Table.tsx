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

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ThreeDotMenuEventType } from "../../interfaces/index";

const ITEM_HEIGHT = 48;
export default function BasicTable() {
  const { RouterPath, TableArray, ViewGetData, setViewGetData, setGetindex } =
    useContext(ApplicationProps);

  // const viewClick = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   getData: {},
  //   getIndex
  // ) => {
  //   setViewGetData(getData);
  //   setGetindex(getIndex);
  // };

  //view menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    getData: {},
    getIndex: number
  ) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();

    setViewGetData(getData);
    setGetindex(getIndex);

    console.log(getData, getIndex, "getData");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const depoistModel = () => {
    setAnchorEl(null);
    alert("depoistModel");
  };

  const widthdrawModel = () => {
    setAnchorEl(null);
    alert("widthdrawModel");
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
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={(e) => handleClick(e, el, index)}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem>
                    <Link
                      to={`/login/${RouterPath}/banking`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      View
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={depoistModel}>Deposit</MenuItem>
                  <MenuItem onClick={widthdrawModel}>WithDraw</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
