import axios from "axios";
import { userRequest } from "../RequestMethod";
import {
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

// login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res);
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
    const res = await userRequest.get("/products/getall");
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
    console.log("unable to delete" + error);
    dispatch(deleteProductFailure());
  }
};

// update product
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
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

//  delete  user
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


// get all order
export const getOrder = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get(`/orders/`);
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
    await userRequest.delete(`/orders/${id}`);
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
    const res = await userRequest.get(`/categories/`);
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
    await userRequest.post(`/categories/newCategory`, category);
    dispatch(createCategorySuccess(category.data));
  } catch (error) {
    console.log("unable to add category" + error);
    dispatch(createCategoryFailure());
  }
};
// delete category
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await userRequest.delete(`/categories/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (error) {
    console.log("unable to delete order" + error);
    dispatch(deleteCategoryFailure());
  }
};
