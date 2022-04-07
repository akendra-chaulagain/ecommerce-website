import {
  loginfailure,
  loginStart,
  loginSuccess,
  registerfailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import axios from "axios";
import {
  getProductFailure,
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

// login user
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    // alert("login success");
  } catch (error) {
    dispatch(registerfailure());
    console.log("register failure" + error);
  }
};
// get all product
export const getAllProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get("/products/getall");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    console.log("unable to get all product" + error);
    dispatch(getProductFailure());
  }
};
