import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./CategoryList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory } from "../../redux/apiCalls";
import { useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [ak, setak] = useState([]);
  // get all category
  const dispatch = useDispatch();

  // get all category data
  useEffect(() => {
    const getCategory = async (dispatch) => {
      try {
        const res = await axios.get(`/categories/`);
        setak(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("unable to get all categories" + error);
      }
    };
    getCategory();
  }, [dispatch]);

  // delete order
  const handleDaelelCategory = (id) => {
    deleteCategory(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "UserId", width: 300 },

    {
      field: "img",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <>
            <div className="categoryImg">
              <img src={params.row.img} alt="" />
            </div>
          </>
        );
      },
    },
    { field: "title", headerName: "Title", width: 350 },

    {
      field: "cat",
      headerName: "Category",
      sortable: false,
      width: 270,
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
              onClick={() => handleDaelelCategory(params.row._id)}
            >
              <Delete />
            </button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="category">
        <Sidebar />

        <div className="categoryContainer">
          {/*  create button */}
          <div className="categoryContainerWrapper">
            <div className="CategoryTitle">All Category</div>
            <div className="createBtn">
              {/* button to create new product */}
              <Link to="/newcategory">
                <button>Create</button>
              </Link>
            </div>
          </div>
          <div className="tableContainer">
            <div style={{ height: 550, width: "100%" }}>
              <DataGrid
                rows={ak}
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
    </>
  );
};

export default CategoryList;
