import {SHIPMENT_CREATED, SHIPMENT_CREATION_ERR, FILL_OUT_FORM} from '../actions/types'

const initialState = {
    shipmentCreated: 0,
    shipmentErr: ""

}

const Shipping = (state = initialState, action) => {
    switch (action.type) {
        
        case SHIPMENT_CREATED:
            return{...state, shipmentCreated: action.payload}

        case SHIPMENT_CREATION_ERR:
            return{...state, shipmentErr: action.payload}

        case FILL_OUT_FORM:
            return{...state, shipmentErr: ""}
        default: 
            return {... state}

    }
}



export default Shipping