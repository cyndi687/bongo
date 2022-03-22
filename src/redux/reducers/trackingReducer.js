import {
    TRACKED_PRODUCT,
    TRACKING_ERROR,
    CALCULATED_PRICE,
    FILL_OUT_FORM,
    CALCULATING_COST_ERROR,
    UPDATE_TRACKER_FAIL,
    TRACKING_INFO,
    ALL_PRODUCT
  } from "../actions/types";
  
  const initialState = {
    trackedProduct: [],
    trackingError: "",
    calculatedPrice: 0,
    updateerr: "",
    calculatecosterr: "",
    trackingNo: "",
    location: [],
    allProducts: []
  };
  
  const Loading = (state = initialState, action) => {
    switch (action.type) {
      case TRACKED_PRODUCT:
        let location =  action.payload.location !== "" ? JSON.parse(action.payload.location) : []
        return { ...state, trackedProduct: action.payload, location  };
  
      case ALL_PRODUCT:
        return { ...state, allProducts: action.payload  };
  
      case TRACKING_ERROR:
        return { ...state, trackingError: action.payload };
  
      case CALCULATED_PRICE:
        return { ...state, calculatedPrice: action.payload };
  
      case FILL_OUT_FORM:
        return { ...state, calculatedPrice: 0, updateerr: "",};
  
      case UPDATE_TRACKER_FAIL:
        return { ...state, updateerr: action.payload };
  
      case CALCULATING_COST_ERROR:
        return { ...state, calculatecosterr: action.payload };
  
      case TRACKING_INFO:
          return{...state, trackingNo: action.payload.tracking_no}
  
      default:
        return { ...state };
    }
  };
  
  export default Loading;
  