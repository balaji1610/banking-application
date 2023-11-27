import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { ApplicationProps } from "../../ContextAPI/Context";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const { TableArray } = useContext(ApplicationProps);

  console.log(TableArray);
  return (
    <TableContainer
      component={Paper}
      style={{ height: "31rem", overflow: "scroll" }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: 650,
          border: "2px solid #ffffff",
          heigh: "10px",
          "& th": {
            color: "#060202",
            backgroundColor: "#BDBDBD",
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
          </TableRow>
        </TableHead>{" "}
        <TableBody>
          {TableArray.map((el) => (
            <TableRow>
              <TableCell>{el.fistname}</TableCell>
              <TableCell>{el.lastname}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.mobile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
