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

const LastetUser = ({ allUser }) => {
  return (
    <>
      <div className="container latestUser">
        <h4 className="text-center">New Join Members</h4>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell tableCellBox">Id</TableCell>
                <TableCell className="tableCell tableCellBox">
                  UserName
                </TableCell>
                <TableCell className="tableCell tableCellBox">Email</TableCell>
                <TableCell className="tableCell tableCellBox">
                  Contact no
                </TableCell>
                <TableCell className="tableCell tableCellBox">
                  Create date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUser?.map((user, key) => (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="tableCell">{user._id}</TableCell>
                  <TableCell className="tableCell">{user.username}</TableCell>
                  <TableCell className="tableCell">{user.email}</TableCell>
                  <TableCell className="tableCell">{user.number}</TableCell>
                  <TableCell className="tableCell">
                    {new Date(user.createdAt).toDateString()}
                  </TableCell>
                  {/* <TableCell className="tableCell">
                        <span className={`status${row.status}`}>
                          {row.email}
                        </span>
                      </TableCell> */}
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
