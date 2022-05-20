// Login

import * as types from "../constants/redux_constants";
import { API_TIMEOUT, API_URL } from "../../config/config";
import axios from "axios";

//Se setean los paeametros por default en axios
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = API_TIMEOUT;

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

const loginError = (error) => {
  return {
    type: types.LOGIN_ERROR,
    error: error,
  };
};

const loginOk = (data) => {
  localStorage.setItem('acceso', true)
  localStorage.setItem('token', data.token)

  return {
    type: types.LOGIN_OK,
    token: data.token,
    
  };
};

export const getLogin = (usuario, pass) => {
  console.log('FUNCION GETLOGIN')
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { data: res } = await axios.post("/auth", {
        user: usuario,
        password: pass,
      });

      if (res.auth) {
        console.log('res: ' ,res)
        dispatch(loginOk(res));
      } else {
        dispatch(loginError({ message: "User or Password invalid" }));
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const loginOff = () => ({
  type: types.LOGIN_LOGOUT,
});