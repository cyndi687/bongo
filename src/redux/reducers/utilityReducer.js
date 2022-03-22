import {ALL_COUNTRIES, ALL_STATES, ALL_CITIES} from '../actions/types'

const initialState = {
    allCountries: [],
    allStates: [],
    allCities: []

}

const Utility = (state = initialState, action) => {
    switch (action.type) {
        
        case ALL_COUNTRIES:
            return{...state, allCountries: action.payload}

        case ALL_STATES:
            return{...state, allStates: action.payload}

        case ALL_CITIES:
            return{...state, allCities: action.payload}
      
        default: 
            return {... state}

    }
}



export default Utility