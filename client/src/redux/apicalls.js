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
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// login user
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // react toastify for alert option when success
    toast.success(" Login Success!", {
      position: "top-center",
      autoClose: 2000,
      transition: Zoom,
    });
  } catch (error) {
    dispatch(loginfailure());
    // react toastify for alert option when failure
    toast.error("Invalid Data!", {
      position: "top-center",
      autoClose: false,
      transition: Zoom,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progress: undefined,
    });
    console.log("login failure" + error);
  }
};

// register user
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    // react toastify for alert option when success
    toast.success("Register Success!", {
      position: "top-center",
      autoClose: false,
      transition: Zoom,
      theme: "dark",
      progress: undefined,
    });
  } catch (error) {
    dispatch(registerfailure());
    // react toastify for alert option when failure
    toast.error("Something went Wrong. Try again!", {
      position: "top-center",
      autoClose: false,
      transition: Zoom,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progress: undefined,
    });
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
