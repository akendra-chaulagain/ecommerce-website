import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Allproduct.css";
import { DataGrid } from "@mui/x-data-grid";
import "./Allproduct.css";
import { Delete, Edit } from "@material-ui/icons";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  //   image
  {
    field: "img",
    headerName: "",
    width: 90,
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
  { field: "lastName", headerName: "Description", width: 160 },
  { field: "email", headerName: "Category", width: 160 },
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
          {/*  data button*/}

          <button className="button_delete">
            <Delete />
          </button>
          {/* delete   button*/}
          <Link to={`/product/` + params.row._id}>
            <button className="button_update">
              <Edit />
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

const Allproduct = () => {
  return (
    <>
      <div className="allproduct">
        <Sidebar />

        <div className="allContainer">
          {/* top bar create button */}
          <div className="allContainerWrapper">
            <div className="ProductTitle ">All Products</div>
            <div className="createBtn">
              <Link to="newProduct">
                <button>Create</button>
              </Link>
            </div>
          </div>

          <div
            className="tableContainer"
            style={{ height: 520, width: "96%" }}
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

export default Allproduct;
