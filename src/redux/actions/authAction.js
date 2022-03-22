import {
    REGISTERING_USER,
    LOGGING_IN_USER,
    REGISTERED_SUCCESSFULLY,
    REGISTRATION_ERROR,
    LOGIN_SUCCESSFUL,
    USER_INFORMATION,
    LOGIN_IN_ERR,
    LOGOUT_SUCCESSFUL
  } from "./types";
  import axios from "axios";
  import config from "./config";
  import qs from "qs";
  
  //Register Customer
  
  const apiconfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  
  export const registerCustomer = (name, email, password) => {
    let data = {
      name: name,
      email: email,
      password: password,
    };
  
    return (dispatch) => {
      dispatch({
        type: REGISTERING_USER,
        payload: true,
      });
      axios
        .post(config.apiUrl + `/customers/create`, qs.stringify(data), apiconfig)
        .then((res) => {
          dispatch({
            type: REGISTERING_USER,
            payload: false,
          });
          dispatch({
            type: REGISTERED_SUCCESSFULLY,
            payload: true,
          });
        })
        .catch((err) => {
          dispatch({
            type: REGISTRATION_ERROR,
            payload: err.response.data.error.message,
          });
          dispatch({
            type: REGISTERING_USER,
            payload: false,
          });
        });
    };
  };
  
  //Login Customer
  export const loginCustomer = (email, password) => {
    let data = {
      email: email,
      password: password,
    };
  
    return (dispatch) => {
      dispatch({
        type: LOGGING_IN_USER,
        payload: true,
      });
      if (email !== "" && password !== "") {
        console.log(config.apiUrl)
        axios
          .post(config.apiUrl + "/customers/login", qs.stringify(data), apiconfig)
          .then((res) => {
            dispatch({
              type: LOGGING_IN_USER,
              payload: false,
            });
            dispatch({
              type: LOGIN_SUCCESSFUL,
              payload: res.data,
            });
            dispatch(customerInfo(res.data.customer_id));
          })
          .catch((err) => {
            dispatch({
              type: LOGGING_IN_USER,
              payload: false,
            });
            dispatch({
              type: LOGIN_IN_ERR,
              payload: 'unable to login',
            });
          });
      }
    };
  };
  
  //Get Customer Info
  export const customerInfo = (customerId) => {
    return (dispatch) => {
      axios
        .get(config.apiUrl + `/customer?customer_id=${customerId}`)
        .then((res) => {
          dispatch({
            type: USER_INFORMATION,
            payload: res.data.customer,
            auth: true,
          });
        })
        .catch((err) => {
          // console.log(err);
        });
    };
  };
  
  export const logout = (payload) => {
  
    return (dispatch) => {
        dispatch({
            type: LOGOUT_SUCCESSFUL,
            payload
        })
    }
  }
  
  //Reinitialize user data
  export const reinitializeUser = () => {
    var user = localStorage.getItem("bongoUser");
    let defaulttofalse = [undefined, null];
    return (dispatch) => {
      if (!defaulttofalse.includes(user)) {
        dispatch({
          type: USER_INFORMATION,
          payload: JSON.parse(user),
          auth: true,
        });
      }
    };
  };
  
  //Update customer's personal information
  export const updatePersonal = (
    customerId,
    name,
    day_phone,
    eve_phone,
    mob_phone
  ) => {
    let body = {
      customer_id: customerId,
      name: name,
      day_phone: day_phone,
      eve_phone: eve_phone,
      mob_phone: mob_phone,
    };
    return (dispatch) => {
      axios
        .post(config.apiUrl + `/customer/update`, body)
        .then((res) => {
          // console.log(res, "i am the update customer info part");
        })
        .catch((err) => {
          // console.log(err);
        });
    };
  };
  
  //Update customer's address
  export const updateAddress = (
    customerId,
    address_1,
    address_2,
    city,
    region,
    postal_code,
    country
  ) => {
    let body = {
      customer_id: customerId,
      address_1: address_1,
      address_2: address_2,
      city: city,
      region: region,
      postal_code: postal_code,
      country: country,
    };
    return (dispatch) => {
      axios
        .post(config.apiUrl + `/customer/address`, body)
        .then((res) => {
        })
        .catch((err) => {
          // console.log(err);
        });
    };
  };
  