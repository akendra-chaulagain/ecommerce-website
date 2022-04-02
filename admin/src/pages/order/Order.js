import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Order.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder } from "../../redux/apiCalls";

const Order = () => {
  // get all order
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orders);
  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

  // delete order
  const handleDeleleOrder = (id) => {
    deleteOrder(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "UserId", width: 380 },

    { field: "email", headerName: "Email", width: 290 },
    { field: "amount", headerName: "Amount", width: 200 },

    {
      field: "contact",
      headerName: "Contact",
      sortable: false,
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {/*  data button*/}

            <button
              className="button_delete"
              onClick={() => handleDeleleOrder(params.row._id)}
            >
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

  return (
    <>
      <div className="order">
        <Sidebar />

        <div className="orderContainer">
          <div className="orderTitle mt-4 text-center">All Orders</div>
          <div
            className="OrderContainerTable"
            style={{ height: 520, width: "100%" }}
          >
            <DataGrid
              rows={order}
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
    </>
  );
};

export default Order;
