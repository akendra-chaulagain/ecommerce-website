import { loginfailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import {
  getProductfailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";

// login user
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // alert("login success");
  } catch (error) {
    dispatch(loginfailure());
    console.log("login failure" + error);
  }
};

// get all product
export const getAllProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get("/products/getall");
    dispatch(getProductSuccess(res.data));
    // alert("login success");
  } catch (error) {
    dispatch(getProductfailure());
    console.log("unable to get alll products" + error);
  }
};
