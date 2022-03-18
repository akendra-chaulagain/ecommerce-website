import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  //   image
  {
    field: "img",
    headerName: "",
    width: 100,
    renderCell: (params) => {
      return (
        <>
          {/* user image */}
          <div className="userImg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          </div>
        </>
      );
    },
  },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 230,
    renderCell: (params) => {
      return (
        <>
          {/* view data button*/}
          <Link to={`/list/` + params.row._id}>
            <button className="button_Edit">View</button>
          </Link>
          {/* delete  user data button*/}
          <Link to={`/lists/` + params.row._id}>
            <button className="button_delete">Delete</button>
          </Link>
        </>
      );
    },
  },
];
const rows = [
  { id: 1, lastName: "Snow", img: "", firstName: "Jon", email: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", email: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", email: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", email: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", email: 56 },
  { id: 6, lastName: "Melisandre", firstName: "akendra", email: 160 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", email: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", email: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", email: 65 },
];

const List = () => {
  return (
    <div className=" list">
      {/* side bar is imnported from side bar container
       */}
      <Sidebar />
      <div className="listContainer">
        <div className="ProductTitle text-center">All List</div>
        {/* <Link to="/new" className="text-end">
          <button className="button_Edit">Edit</button>
        </Link> */}
        <div style={{ height: 520, width: "96%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[8]}
            disableSelectionOnClick
            // getRowId={(r) => r._id}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
