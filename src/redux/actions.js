export const SEARCH = 'search/SEARCH'
export const SET_RESULTS = 'search/SET_RESULTS'
export const SET_LOCATION = 'search/SET_LOCATION'

export const search = function (text) {
    return {
        type: SEARCH,
        text: text
    }
}

export const setResults = function (results) {
    return {
        type: SET_RESULTS,
        results: results
    }
}
export const setLocation = function (city) {
    return {
        type: SET_LOCATION,
        city: city
    }
}

// redux thunk function - function that returns a function
export const startSearch = (text) => {
    return (dispatch) => {
        dispatch(search(text))
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${text}&appid=2ccbaf615c50480240e4b467b4aa60f4&units=imperial`)
            .then(res => res.json())
            .then(data => {
                dispatch(setLocation(data))
                if(!data.coord?.lat || !data.coord?.lon){
                    alert('Zipcode not found, try again?')
                    dispatch(setResults(null))
                    return
                }
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=2ccbaf615c50480240e4b467b4aa60f4&units=imperial`)
                    .then(res => res.json())
            })
            .then(data => {
                dispatch(setResults(data))
            })
    }
}