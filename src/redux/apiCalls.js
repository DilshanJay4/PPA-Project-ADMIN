import { 
  loginFailure,
  loginStart, 
  loginSuccess, 
} from './userRedux';

import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure 
} from './usersAllRedux';

import { publicRequest, userRequest } from '../requestMethods';
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from './productRedux';


 // Login API Call
export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login?' , user); 
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}


// Product API Calls
//GET
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products");
     
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };

// DELETE
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(res.data));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

//UPDATE
  export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };

//CREATE
  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };




  // User Api Calls
  //GET
  export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      // Replace this with your actual API endpoint for getting users
    // const res = await userRequest.get('/users');
      const res = await userRequest.get('/users');
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };

  //DELETE
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      const res = await userRequest.delete(`/users/${id}`);
      dispatch(deleteUserSuccess(res.data));
    } catch (err) {
      dispatch(deleteUserFailure());
    }
  };





