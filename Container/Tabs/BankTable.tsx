import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Text from "../../components/Text";
import Button from "@mui/material/Button";
import BankingPageStyle from "../../styles/BankingPageStyle";
import Model_Comp from "../../components/Model_Comp";
import EditBankForm from "./EditBankForm";
export default function BankTable({ bankingArray, currentIndex, InvokeHook }) {
  let getLength = bankingArray[currentIndex].BankingData.length;
  const [EditBankopen, setEditBankOpen] = useState(false);

  const [EditCustomerindex, setCustomerindex] = useState(-1);

  const [EditCustomerdata, setEditCustomerdata] = useState();

  const EditModel = (
    event: React.MouseEvent<HTMLButtonElement>,
    getCustomerindex,
    getCustomerData
  ) => {
    event.preventDefault();
    setCustomerindex(getCustomerindex);
    setEditCustomerdata(getCustomerData);
    setEditBankOpen(true);
  };

  const handleCloseClick = () => {
    setEditBankOpen(false);
  };

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
                  <TableCell>
                    {" "}
                    <Text label="Edit" variant="h6" />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Text label="BALANCE" variant="h6" />
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
                    <TableCell>
                      <Button
                        onClick={(e) => EditModel(e, index, el)}
                        variant="contained"
                        color="error"
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Text label={el.balance} variant="body1" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div style={BankingPageStyle.NoRecords as React.CSSProperties}>
          <h1>* NO RECORDS *</h1>
        </div>
      )}

      <div>
        {" "}
        <Model_Comp
          open={EditBankopen}
          setOpen={setEditBankOpen}
          handleClose={handleCloseClick}
          title="EDIT BANK DETAILS"
          component={
            <EditBankForm
              setOpen={setEditBankOpen}
              handleClose={handleCloseClick}
              EditCustomerindex={EditCustomerindex}
              EditCustomerdata={EditCustomerdata}
            />
          }
        />
      </div>
    </div>
  );
}
