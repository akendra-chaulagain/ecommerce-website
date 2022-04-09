import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Allproduct.css";
import { Delete, Edit } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProducts, getProducts } from "../../redux/apiCalls";
import { ToastContainer } from "react-toastify";

const Allproduct = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  // delete product
  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "UserId", width: 200 },
    { field: "name", headerName: "Product Name", width: 720 },
    { field: "price", headerName: "Amount", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* delete button */}
            <button
              className="button_delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <Delete />
            </button>
            {/* edit button */}
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

  return (
    <>
      <div className="allproduct">
        <Sidebar />

        <div className="allContainer">
          {/*  create button */}
          <div className="allContainerWrapper">
            <div className="ProductTitle">All Products</div>
            <div className="createBtn">
              {/* button to create new product */}
              <Link to="/newProduct">
                <button>Create</button>
              </Link>
            </div>
          </div>
          <div className="tableContainer">
            <div style={{ height: 550, width: "100%" }}>
              <DataGrid
                rows={allProduct}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                disableSelectionOnClick
                getRowId={(r) => r._id}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Allproduct;
