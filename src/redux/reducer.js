import { SEARCH, SET_LOCATION, SET_RESULTS } from "./actions"
const defaultState = {
    weatherData: null,
    searchTerm: '',
    foundCity: '',
    loading: false
}

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return {
                ...state,
                weatherData: action.results,
                loading: false
            }
        case SEARCH:
            return {
                ...state,
                searchTerm: action.text,
                loading: true
            }
        case SET_LOCATION:
            return{
                ...state,
                foundCity: action.city
            }

        default:
            return state
    }
}