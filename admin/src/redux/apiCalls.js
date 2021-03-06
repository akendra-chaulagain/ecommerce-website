import axios from "axios";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getAllUserFailure,
  getAllUserStart,
  getAllUserSuccess,
} from "./allUserRedux";
import {
  createCategoryFailure,
  createCategoryStart,
  createCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "./categoryRedux";
import {
  deleteOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
} from "./orderRedux";
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
import { loginfailure, loginStart, loginSuccess } from "./userRedux";
import "react-toastify/dist/ReactToastify.css";
import { toast, Zoom } from "react-toastify";

// success tostify
const tostifySuccess = {
  position: "top-center",
  autoClose: false,
  transition: Zoom,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

// failure tostify
const tostifyFailure = {
  position: "top-center",
  autoClose: false,
  transition: Zoom,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

// login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // react toastify for alert option when success
    toast.success(" Login Success!", tostifySuccess);
  } catch (error) {
    console.log(error);
    dispatch(loginfailure());
    // react toastify for alert option when failure
    toast.error("Invalid Data!", tostifyFailure);
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
    await axios.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
    // react toastify for alert option when failure
    toast.success("Product deleted!", tostifySuccess);
  } catch (error) {
    console.log("unable to delete" + error);
    dispatch(deleteProductFailure());
    // react toastify for alert option when failure
    toast.error("try again. unable to delete!", tostifyFailure);
  }
};

// update product
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await axios.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(id, product));
    toast.success("product  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update product" + error);
    toast.error("try again. unable to update!", tostifyFailure);
    dispatch(updateProductFailure());
  }
};

// add  product
export const createProducts = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    await axios.post(`/products/newproduct`, product);
    dispatch(createProductSuccess(product.data));
    toast.success("product  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to add product" + error);
    dispatch(createProductFailure());
    toast.error("try again. unable to create product!", tostifyFailure);
  }
};

// get all user
export const getUser = async (dispatch) => {
  dispatch(getAllUserStart());
  try {
    const res = await axios.get(`/users/`);
    dispatch(getAllUserSuccess(res.data));
  } catch (error) {
    console.log("unable to get user" + error);
    dispatch(getAllUserFailure());
  }
};

//  delete  user
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
    toast.success("user deleted!", tostifySuccess);
  } catch (error) {
    console.log("unable to delete user" + error);
    dispatch(deleteUserFailure());
    toast.error("try again. unable to delete user!", tostifyFailure);
  }
};

// get all order
export const getOrder = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await axios.get(`/orders/`);
    dispatch(getOrderSuccess(res.data));
  } catch (error) {
    console.log("unable to get all order" + error);
    dispatch(getOrderFailure());
  }
};
// delete order
export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    await axios.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (error) {
    console.log("unable to delete order" + error);
    dispatch(deleteOrderFailure());
  }
};
// get category
export const getCategory = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await axios.get(`/categories/`);
    dispatch(getCategorySuccess(res.data));
  } catch (error) {
    console.log("unable to get all categories" + error);
    dispatch(getCategoryFailure());
  }
};

// create category
export const createCategory = async (category, dispatch) => {
  dispatch(createCategoryStart());
  try {
    await axios.post(`/categories/newCategory`, category);
    dispatch(createCategorySuccess(category.data));
    toast.success("category created!", tostifySuccess);
  } catch (error) {
    console.log("unable to add category" + error);
    dispatch(createCategoryFailure());
    toast.error("try again. unable to create category!", tostifyFailure);
  }
};
// delete category
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete(`/categories/${id}`);
    dispatch(deleteCategorySuccess(id));
    toast.success("category deleted!", tostifySuccess);
  } catch (error) {
    console.log("unable to delete order" + error);
    dispatch(deleteCategoryFailure());
    toast.error("try again. unable to delete category!", tostifyFailure);
  }
};
