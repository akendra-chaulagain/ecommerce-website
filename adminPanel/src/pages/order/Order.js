import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Order.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  //   image
  {
    field: "img",
    headerName: "",
    width: 70,
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
  { field: "firstName", headerName: "Product ", width: 160 },
  { field: "lastName", headerName: "Email", width: 160 },
  { field: "email", headerName: "Amount", width: 180 },
  { field: "email", headerName: "Address", width: 190 },
  {
    field: "fullName",
    headerName: "Status",
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
          {/*  data button*/}

          <button className="button_delete">
            <Delete />
          </button>
          {/* delete   button*/}
          <Link to={`/order/` + params.row._id}>
            <button className="button_update">
              <Visibility />
            </button>
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

const Order = () => {
  return (
    <>
      <div className="order">
        <Sidebar />

        <div className="orderContainer">
          {/* chart  component import from chart comonent*/}
          <Chart />
          <div className="orderTitle mt-4 text-center">All Orders</div>
          <div
            className="OrderContainerTable"
            style={{ height: 520, width: "90%" }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              //   getRowId={(r) => r._id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
