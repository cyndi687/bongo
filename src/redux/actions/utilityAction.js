import { ALL_COUNTRIES, ALL_STATES, ALL_CITIES } from "./types";
import axios from "axios";
import config from "./config";


export const getCountries = () => {
    return (dispatch) => {
      axios
        .get(config.apiUrl + `/country`)
        .then((res) => {
          dispatch({
            type: ALL_COUNTRIES,
            payload: res.data.countries,
          });
        })
        .catch((err) => {
        });
    };
  };

export const getStates = (id) => {
  return(dispatch)=>{
    axios.get(config.apiUrl + `/state?country_id=${id}`)
    .then((res)=>{
      dispatch({
        type: ALL_STATES,
        payload: res.data.states
      })
    })
    .catch(err=>{
    })
  }
}

export const getCities = (id) => {
  return(dispatch)=>{
    axios.get(config.apiUrl + `/city?state_id=${id}`)
    .then((res)=>{
      dispatch({
        type: ALL_CITIES,
        payload: res.data.cities
      })
    })
    .catch(err=>{
    })
  }
}
  
  