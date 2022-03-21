import axios from "axios";
import { userRequest } from "../RequestMethod";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";
import { loginfailure, loginStart, loginSuccess } from "./userRedux";

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
export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (error) {
    console.log("unable to get all product" + error);
    dispatch(deleteProductFailure());
  }
};
