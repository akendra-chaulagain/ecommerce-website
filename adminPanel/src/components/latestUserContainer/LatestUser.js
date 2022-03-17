import React from "react";
import "./LatestUser.css";
// for table using material-Ui Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const rows = [
  {
    id: "1",
    product: "mobile",
    customer: "ak",
    amount: "456",
    date: "12 march",
    status: "approved",
  },
  {
    id: "2",
    product: "mobile",
    customer: "ak",
    amount: "456",
    date: "12 march",
    status: "pending",
  },
  {
    id: "3",
    product: "mobile",
    customer: "ak",
    amount: "456",
    date: "12 march",
    status: "pending",
  },
  {
    id: "4",
    product: "mobile",
    customer: "ak",
    amount: "456",
    date: "12 march",
    status: "approved",
  },
  {
    id: "5",
    product: "mobile",
    customer: "ak",
    amount: "456",
    date: "12 march",
    status: "pending",
  },
];

const LastetUser = () => {
  return (
    <>
      <div className="container latestUser">
        <h4>Latest Transactions</h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, key) => (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">{row.product}</TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default LastetUser;
