import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Allproduct.css";
import { Delete, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

const Allproduct = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);
  console.log(allProduct);

  // get all product
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  // delete product
  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };

  return (
    <>
      <div className="allproduct">
        <Sidebar />

        <div className="allContainer">
          {/*  create button */}
          <div className="allContainerWrapper">
            <div className="ProductTitle ">All Products</div>
            <div className="createBtn">
              {/* button to create new product */}
              <Link to="/newProduct">
                <button>Create</button>
              </Link>
            </div>
          </div>
          {/* table */}
          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">UserId</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((item, key) => (
                  <tr key={key}>
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      {/*  delete button*/}
                      <button
                        className="button_delete"
                        onClick={() => handleDelete(item._id)}
                      >
                        <Delete />
                      </button>
                      {/* edit   button*/}
                      <Link to={`/product/` + item._id}>
                        <button className="button_update">
                          <Edit />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
