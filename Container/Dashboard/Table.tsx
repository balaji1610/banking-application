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
import Model_Comp from "../../components/Model_Comp";
import DepoistForm from "../../Container/Banking/Forms/DepoistForm";
import WithdrawlForm from "../../Container/Banking/Forms/WithdrawlForm";
import { ThreeDotMenuEventType } from "../../interfaces/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const ITEM_HEIGHT = 48;
export default function BasicTable() {
  const {
    RouterPath,
    TableArray,
    setTableArray,
    ViewGetData,
    setViewGetData,
    setGetindex,
    Getindex,
    SubmitBtninvoke,
  } = useContext(ApplicationProps);
  useEffect(() => {
    TableArray;
  }, []);
  useEffect(() => {
    TableArray;
  }, [SubmitBtninvoke]);
  const [DepoistOpen, setDepoistOpen] = useState(false);

  const [WithdrawOpen, setWithdrawOpen] = useState(false);

  useEffect(() => {
    let AccountHolder = TableArray.map((elm) => {
      return elm.BankingData.length >= 1
        ? { ...elm, accountholder: "Yes" }
        : elm;
    });
    setTableArray(AccountHolder);
  }, []);

  //accountHolder
  console.log(TableArray, "TableArray");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    getData: {},
    getIndex: number
  ) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setViewGetData(getData);
    setGetindex(getIndex);
  };
  //accountholder, Unaccountholder

  const accountHolderStatus =
    ViewGetData?.accountholder == "Yes" ? true : false;

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Deposit Events
  const depoistModel = () => {
    setAnchorEl(null);
    setDepoistOpen(true);
  };

  const depoistModelClose = () => {
    setDepoistOpen(false);
  };

  //WidthDraw Events
  const withdrawModel = () => {
    setAnchorEl(null);
    setWithdrawOpen(true);
  };

  const withdrawModelClose = () => {
    setAnchorEl(null);
    setWithdrawOpen(false);
  };

  return (
    <div>
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
                <TableCell>
                  {el.accountholder == "Yes" && (
                    <AccountCircleIcon fontSize="large" color="primary" />
                  )}
                  {el.fistname}
                </TableCell>
                <TableCell>{el.lastname}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>
                  {el.mobile}{" "}
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
                    {accountHolderStatus ? (
                      <div>
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
                        <MenuItem onClick={withdrawModel}>WithDraw</MenuItem>
                      </div>
                    ) : (
                      <div>
                        {" "}
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
                      </div>
                    )}
                  </Menu>
                </TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Depoist Model */}
      <div>
        {" "}
        <Model_Comp
          open={DepoistOpen}
          setOpen={setDepoistOpen}
          handleClose={depoistModelClose}
          title="ADD DEPOIST"
          component={
            <DepoistForm
              setOpen={setDepoistOpen}
              handleClose={depoistModelClose}
            />
          }
        />
      </div>
      <div>
        <div>
          <Model_Comp
            open={WithdrawOpen}
            setOpen={setWithdrawOpen}
            handleClose={withdrawModelClose}
            title="WITHDRAWAL"
            component={
              <WithdrawlForm
                setOpen={setWithdrawOpen}
                handleClose={withdrawModelClose}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
