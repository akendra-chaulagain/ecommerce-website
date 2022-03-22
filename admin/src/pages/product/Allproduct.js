import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Allproduct.css";
import { DataGrid } from "@mui/x-data-grid";
import "./Allproduct.css";
import { Delete, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

const Allproduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // get all product
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  // delete product
  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    //  product img field
    {
      field: "img",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <>
            <div className="userImg">
              <img src={params.row.img} alt="product_img" />
            </div>
          </>
        );
      },
    },
    // product name
    { field: "name", headerName: "Product ", width: 250 },
    // product desc
    { field: "desc", headerName: "Description", width: 250 },
    // product category
    { field: "cat", headerName: "Category", width: 100 },
    // product stock
    { field: "stock", headerName: "Stock", width: 100 },
    // procuct action
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            {/*  data button*/}

            <button
              className="button_delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <Delete />
            </button>
            {/* edit   button*/}
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
          {/* top bar create button */}
          <div className="allContainerWrapper">
            <div className="ProductTitle ">All Products</div>
            <div className="createBtn">
              <Link to="newProduct">
                <button>Create</button>
              </Link>
            </div>
          </div>

          <div className="tableContainer" style={{ height: 520, width: "96%" }}>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              getRowId={(r) => r._id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
