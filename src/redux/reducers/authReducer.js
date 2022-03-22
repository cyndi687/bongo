import {
    REGISTRATION_ERROR,
    LOGIN_SUCCESSFUL,
    USER_INFORMATION,
    LOGIN_IN_ERR,
    FILL_OUT_FORM,
    LOGOUT_SUCCESSFUL
  } from "../actions/types";
  import axios from "axios";
  
  const initialState = {
    regErr: "",
    user: {},
    auth: false,
    loginErr: ""
  };
  
  const Auth = (state = initialState, action) => {
    switch (action.type) {
      case REGISTRATION_ERROR:
        return { ...state, regErr: action.payload };
  
      case LOGIN_SUCCESSFUL:
        storeToken(action.payload.token);
        return { ...state, auth: true };
  
      case LOGOUT_SUCCESSFUL:
        removeToken();
        return { ...state, auth: false };
  
      case USER_INFORMATION:
        if (action.auth == true) {
          saveUser(action.payload);
        }
        return { ...state, user: action.payload, auth: action.auth };
  
      case LOGIN_IN_ERR:
        return{...state, loginErr: action.payload}
  
      case FILL_OUT_FORM:
        return{...state, loginErr: ""}
  
      default:
        return { ...state };
    }
  };
  
  const storeToken = (payload) => {
    localStorage.setItem("bongoExpressToken", JSON.stringify(payload));
    axios.defaults.headers.common["Authorization"] = "Bearer " + payload;
  };
  
  const removeToken = () => {
    localStorage.setItem("bongoExpressToken", "");
    axios.defaults.headers.common["Authorization"] = "Bearer " + "";
  };
  
  const saveUser = (payload) => {
    localStorage.setItem("bongoUser", JSON.stringify(payload));
  };
  
  export default Auth;
  