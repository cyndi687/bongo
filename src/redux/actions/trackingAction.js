import {
    TRACKED_PRODUCT,
    TRACKING_PRODUCT,
    CREATING_TRACK,
    TRACKING_ERROR,
    UPDATE_TRACKER_FAIL,
    CALCULATING_COST,
    CALCULATING_COST_ERROR,
    CALCULATED_PRICE,
    UPDATING_TRACKING,
    UPDATE_TRACKER_SUCCESS,
    TRACKING_INFO,
    ALL_PRODUCT
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
  
  //Track product
  export const trackProducts = (trackingNo) => {
    return (dispatch) => {
      dispatch({
        type: TRACKING_PRODUCT,
        payload: true,
      });
      axios
        .get(config.apiUrl + `/shipment/trackinginfo?tracking_no=${trackingNo}`)
        .then((res) => {
          dispatch({
            type: TRACKING_PRODUCT,
            payload: false,
          });
          if (res.data.trackingJson !== null) {
            dispatch({
              type: TRACKED_PRODUCT,
              payload: res.data.trackingJson,
            });
          } else {
            dispatch({
              type: TRACKING_ERROR,
              payload: "*No information for this tracking number",
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: TRACKING_PRODUCT,
            payload: false,
          });
          dispatch({
            type: TRACKING_ERROR,
            payload: err.response == undefined ? "Something went wrong" : err.response.data.error.message ,
          });
        });
    };
  };
  
  //Track product
  export const getAllTracking = () => {
    return (dispatch) => {
      dispatch({
        type: TRACKING_PRODUCT,
        payload: true,
      });
      axios
        .get(config.apiUrl + `/shipment/getAllTracking`)
        .then((res) => {
          dispatch({
            type: TRACKING_PRODUCT,
            payload: false,
          });
          if (res.data.trackingJsonList.length > 0) {
            dispatch({
              type: ALL_PRODUCT,
              payload: res.data.trackingJsonList,
            });
          } else {
            dispatch({
              type: TRACKING_ERROR,
              payload: "*No information for this tracking number",
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: TRACKING_PRODUCT,
            payload: false,
          });
          dispatch({
            type: TRACKING_ERROR,
            payload: err.response == undefined ? "Something went wrong" : err.response.data.error.message ,
          });
        });
    };
  };
  //Create tracking
  export const createTrack = (
    shippingId,
    shippingTo,
    shippingFrom,
    description,
    timestamp
  ) => {
    let data = {
      tracking_id: 0,
      tracking_no: "string",
      tracking_description: description,
      location: "",
      timestamps: timestamp,
      quantity: 0,
      shipment_id: shippingId,
      shipping_to_id: shippingTo,
      shipping_from_id: shippingFrom,
    };
    return (dispatch) => {
      dispatch({
        type: CREATING_TRACK,
        payload: true,
      });
      axios
        .post(config.apiUrl + `/shipment/createTracking`, data)
        .then((res) => {
          dispatch({
            type: CREATING_TRACK,
            payload: false,
          });
          dispatch({
            type: TRACKING_INFO,
            payload: res.data.tracking,
          });
          localStorage.removeItem("shipmentInfo");
          localStorage.removeItem("shipmentToInfo");
        })
        .catch((err) => {
          dispatch({
            type: CREATING_TRACK,
            payload: false,
          });
        });
    };
  };
  
  //Calculate Tracking Cost
  export const calculatePackageCost = (height, width, depth, weight) => {
    let data = {
      height: height,
      width: width,
      depth: depth,
      weight: weight,
    };
  
    return (dispatch) => {
      if (height == 0 || width == 0 || depth == 0 || weight == 0) {
        dispatch({
          type: CALCULATING_COST_ERROR,
          payload: "Please fill out all fields",
        });
      } else {
        dispatch({
          type: CALCULATING_COST,
          payload: true,
        });
        axios
          .post(config.apiUrl + `/calculatePrice`, qs.stringify(data), apiconfig)
          .then((res) => {
            dispatch({
              type: CALCULATING_COST,
              payload: false,
            });
            dispatch({
              type: CALCULATED_PRICE,
              payload: res.data.calculatedPrice,
            });
          })
          .catch((err) => {
            dispatch({
              type: CALCULATING_COST_ERROR,
              payload: err.response.data.error.message,
            });
            dispatch({
              type: CALCULATING_COST,
              payload: false,
            });
          });
      }
    };
  };
  
  //Update tracking info
  export const updateTracking = (trackingNo, trackingDescription, location,estdeliveryDate, status) => {
    var date = new Date();
    var timestamp = date.getTime();
    return (dispatch) => {
      if (trackingNo == "" || location == "" || trackingDescription == ""||estdeliveryDate == ""||status=="") {
        dispatch({
          type: UPDATE_TRACKER_FAIL,
          payload: "*Please fill out all fields",
        });
      } else {
        dispatch({
          type: UPDATING_TRACKING,
          payload: true,
        });
        axios
          .get(config.apiUrl + `/shipment/trackinginfo?tracking_no=${trackingNo}`)
          .then((res) => {
            let presentlocations =
              res.data.trackingJson.location == ""
                ? ""
                : JSON.parse(res.data.trackingJson.location);
            let data = {
              tracking_id: res.data.trackingJson.tracking_id,
              tracking_no: trackingNo,
              tracking_description: trackingDescription,
              estdeliveryDate:estdeliveryDate,
              status: status,
              location:
                res.data.trackingJson.location == ""
                  ? JSON.stringify([
                      { name: location, longitude: "", latitude: "", timestamps: timestamp, tracking_description: trackingDescription,},
                    ])
                  : JSON.stringify(
                      presentlocations.concat({
                        name: location,
                        longitude: "",
                        latitude: "",
                        timestamps: timestamp,
                        tracking_description: trackingDescription,
                      })
                    ),
              timestamps: timestamp,
              quantity: res.data.trackingJson.quantity,
              shipment_id: res.data.trackingJson.shipment_id,
              shipping_to_id: res.data.trackingJson.shipping_to_id,
              shipping_from_id: res.data.trackingJson.shipping_from_id,
            };
            axios
              .put(config.apiUrl + `/shipment/updateTracking`, data)
              .then((res) => {
                dispatch({
                  type: UPDATING_TRACKING,
                  payload: false,
                });
                dispatch({
                  type: UPDATE_TRACKER_SUCCESS,
                  payload: res.data,
                });
              })
              .catch((err) => {
                dispatch({
                  type: UPDATING_TRACKING,
                  payload: false,
                });
                dispatch({
                  type: UPDATE_TRACKER_FAIL,
                  payload: err.response.data.error.message,
                });
              });
          })
          .catch((err) => {});
      }
    };
  };
  