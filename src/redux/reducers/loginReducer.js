import * as types from "../constants/redux_constants";

const initialState = {
  loggedIn: false,
  usuario: null,
  token: null,
  id_usuario: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_OK: {
      console.log("LOGIN_OK");
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        error: null
      };
    }
    case types.LOGIN_ERROR: {
      console.log("LOGIN_ERROR");
      return {
        ...state,
        loggedIn: false,
        error: action.error
      };
    }
    case types.LOGIN_REQUEST: {
      console.log("LOGIN_REQUEST");
      return {
        ...state,
        loggedIn: false,
        error: null
      };
    }
    case types.LOGIN_LOGOUT: {
      console.log("LOGIN_LOGOUT");
      return {
        ...state,
        loggedIn: false,
        token: null,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
