import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getUser } from "../../redux/apiCalls";
import { DeleteOutlined } from "@material-ui/icons";

const List = () => {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.user.currentUser);

  // get alluser using redux
  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  // delete product from redux
  const handleDeleteUser = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "UserId", width: 220 },
    { field: "username", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "number", headerName: "Contact no", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {/* delete  user data button*/}
              <button
                className="button_delete"
                onClick={() => handleDeleteUser(params.row._id)}
              >
                <DeleteOutlined />
              </button>
          </>
        );
      },
    },
  ];

  return (
    <div className=" list">
      {/* side bar is imported from side bar container
       */}
      <Sidebar />
      <div className="listContainer">
        <div className="ProductTitle text-center">All List</div>
        {/* <Link to="/new" className="text-end">
          <button className="button_Edit">Edit</button>
        </Link> */}
        <div style={{ height: 520, width: "96%" }}>
          <DataGrid
            rows={allUser}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[8]}
            disableSelectionOnClick
            getRowId={(r) => r._id}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default List;
