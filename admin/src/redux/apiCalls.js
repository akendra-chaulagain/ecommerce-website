import axios from "axios";
import { userRequest } from "../RequestMethod";
import {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import {
  getAllUserFailure,
  getAllUserStart,
  getAllUserSuccess,
  loginfailure,
  loginStart,
  loginSuccess,
} from "./userRedux";

// login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("login success!");
  } catch (error) {
    console.log(error);
    dispatch(loginfailure());
  }
};

// get all products
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get("/products/getall");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    console.log("unable to get all product" + error);
    dispatch(getProductFailure());
  }
};

// delete product
export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    console.log("unable to get all product" + error);
    dispatch(deleteProductFailure());
  }
};

// update product
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`);
    dispatch(updateProductSuccess(id, product));
  } catch (error) {
    console.log("unable to update product" + error);
    dispatch(updateProductFailure());
  }
};

// add  product
export const createProducts = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    await userRequest.post(`/products/newproduct`, product);
    dispatch(createProductSuccess(product.data));
  } catch (error) {
    console.log("unable to add product" + error);
    dispatch(createProductFailure());
  }
};

// get all user
export const getUser = async (dispatch) => {
  dispatch(getAllUserStart());
  try {
    const res = await userRequest.get(`/users/`);
    dispatch(getAllUserSuccess(res.data));
  } catch (error) {
    console.log("unable to get user" + error);
    dispatch(getAllUserFailure());
  }
};

//  delete all user
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    console.log("unable to delete user" + error);
    dispatch(deleteProductFailure());
  }
};
