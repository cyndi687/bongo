import {combineReducers } from 'redux'
import General from './generalReducer'
import Loader from './loaderReducer'
import Tracking from './trackingReducer'
import Shipping from './shippingReducer'
import Auth from './authReducer'
import Utility from "./utilityReducer" 

export default combineReducers ({
    General,
    Loader,
    Tracking,
    Shipping,
    Auth,
    Utility
})