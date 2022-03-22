import {CHANGE_ACTIVE,FILL_OUT_FORM, SWITCH_AUTH} from './types'


//Change Nav active
export const changeActive = (payload) => {
    return{
        type: CHANGE_ACTIVE,
        payload
    }
}


//Gets all Form Inputs
export const getFormDetails = (payload) => {

    return (dispatch) => {
        dispatch({
            type: FILL_OUT_FORM,
            payload: payload
        })
    }
}

//Switch login and reg from
export const switchAuthForm = (payload) => {

    return (dispatch) => {
        dispatch({
            type: SWITCH_AUTH,
            payload: payload
        })
    }
}

