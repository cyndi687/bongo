import {
    CREATING_SHIPMENT,
    CREATING_DOCUMENT,
    CREATING_SHIPPING_TO,
    CREATING_SHIPPING_FROM,
    SHIPMENT_CREATED,
    SHIPMENT_CREATION_ERR,
  } from "./types";
  import axios from "axios";
  import config from "./config";
  import { createTrack } from "./trackingAction";
  
  //Track product
  export const createshipping = (
    shipmentName,
    shipmentType,
    goodsType,
    width,
    length,
    weight,
    containerNo
  ) => {
    let data = {
      name: shipmentName,
      shipping_type: shipmentType,
      container_no: containerNo,
      length: length,
      width: width,
      height: 0,
      weight: weight,
      goodsType: goodsType,
      additional_info: "string",
    };
    console.log(shipmentName,
      shipmentType,
      goodsType,
      width,
      length,
      weight,
      containerNo)
    return (dispatch) => {
      dispatch({
        type: CREATING_SHIPMENT,
        payload: true,
      });
      axios
        .post(config.apiUrl + `/shipment/create`, data)
        .then((res) => {
          dispatch({
            type: CREATING_SHIPMENT,
            payload: false,
          });
          if (res.data.status) {
            dispatch({
              type: SHIPMENT_CREATED,
              payload: 1,
            });
          }
          localStorage.setItem("shipmentInfo", JSON.stringify(res.data.shipment));
        })
        .catch((err) => {
          dispatch({
            type: CREATING_SHIPMENT,
            payload: false,
          });
          dispatch({
            type: SHIPMENT_CREATION_ERR,
            payload: 'unable to save shipment',
          });
        });
    };
  };
  
  //Create shipping document
  export const createdocument = () => {
    let data = {
      shipping_doc_id: 0,
      reference_no: "string",
      doc_url: "string",
      document_name: "string",
      shipment_id: 0,
    };
    return (dispatch) => {
      dispatch({
        type: CREATING_DOCUMENT,
        payload: true,
      });
      axios
        .post(config.apiUrl + `/shipment/createDocument`, data)
        .then((res) => {
          dispatch({
            type: CREATING_DOCUMENT,
            payload: false,
          });
        })
        .catch((err) => {
          dispatch({
            type: CREATING_DOCUMENT,
            payload: false,
          });
        });
    };
  };
  
  //Creating shipping to
  export const shippingto = (
    receiverName,
    receiverEmail,
    receiverPhone,
    receiverCompany,
    receiverCountry,
    receiverAddress1,
    receiverAddress2,
    receiverAddress3,
    postal_code,
    state,
    city
  ) => {
    let data = {
      shipping_to_id: 0,
      receiver_name: receiverName,
      receiver_company: receiverCompany,
      receiver_country: receiverCountry,
      shipment_id: 0,
      receiver_address: receiverAddress1,
      receiver_address_2: receiverAddress2,
      receiver_address_3: receiverAddress3,
      postal_code: postal_code,
      state: state,
      city: city,
      email: receiverEmail,
      phone_number: receiverPhone,
      country_code: "+234",
      taxt_no: "string",
    };
    return (dispatch) => {
      if (state == "" || city == "") {
        dispatch({
          type: SHIPMENT_CREATION_ERR,
          payload: "Please Select Shipment Destination",
        });
      } else {
        dispatch({
          type: CREATING_SHIPPING_TO,
          payload: true,
        });
        axios
          .post(config.apiUrl + `/shipment/createToInfo`, data)
          .then((res) => {
            dispatch({
              type: CREATING_SHIPPING_TO,
              payload: false,
            });
            if (res.data.status) {
              dispatch({
                type: SHIPMENT_CREATED,
                payload: 2,
              });
            }
            localStorage.setItem(
              "shipmentToInfo",
              JSON.stringify(res.data.shippingTo)
            );
          })
          .catch((err) => {
            dispatch({
              type: CREATING_SHIPPING_TO,
              payload: false,
            });
            dispatch({
              type: SHIPMENT_CREATION_ERR,
              payload: err.response.data.error.message,
            });
          });
      }
    };
  };
  
  //Creating shipping from
  export const shippingfrom = (
    senderName,
    senderCompany,
    senderCountry,
    senderAddress1,
    senderAddress2,
    senderAddress3,
    senderState,
    senderCity,
    senderEmail,
    senderPhone,
    senderVatNo,
    description
  ) => {
    let data = {
      sender_name: senderName,
      sender_company: senderCompany,
      sender_country: senderCountry,
      shipment_id: 0,
      sender_address: senderAddress1,
      sender_address_2: senderAddress2,
      sender_address_3: senderAddress3,
      postal_code: 0,
      state: senderState,
      city: senderCity,
      email: senderEmail,
      phone_number: senderPhone,
      country_code: "+234",
      taxt_no: "string",
      vat_no: senderVatNo,
    };
    return (dispatch) => {
      var shipmentInfo = JSON.parse(localStorage.getItem("shipmentInfo"));
      var shipmentToInfo = JSON.parse(localStorage.getItem("shipmentToInfo"));
      var date = new Date();
      var timestamp = date.getTime();
      if (senderState == "" || senderCity == "") {
        dispatch({
          type: SHIPMENT_CREATION_ERR,
          payload: "Please Select Shipment Location",
        });
      } else {
        dispatch({
          type: CREATING_SHIPPING_FROM,
          payload: true,
        });
        axios
          .post(config.apiUrl + `/shipment/createFromInfo`, data)
          .then((res) => {
            dispatch({
              type: CREATING_SHIPPING_FROM,
              payload: false,
            });
            if (res.data.status) {
              dispatch(
                createTrack(
                  shipmentInfo.shipment_id,
                  shipmentToInfo.shipping_to_id,
                  res.data.shippingFrom.shipping_from_id,
                  description,
                  timestamp
                )
              );
              dispatch({
                type: SHIPMENT_CREATED,
                payload: 0,
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: CREATING_SHIPPING_FROM,
              payload: false,
            });
            dispatch({
              type: SHIPMENT_CREATION_ERR,
              payload: err.response.data.error.message,
            });
          });
      }
    };
  };
  