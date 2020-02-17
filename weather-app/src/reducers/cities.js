import { SET_FORECAST_DATA } from './../actions';
import {createSelector} from 'reselect';
export const cities = (state =  {}, action) =>{
    switch (action.type) {
        case SET_FORECAST_DATA:
            const{ city, forecastData } = action.payload;
            return { ...state, [city]: {forecastData: forecastData}}
        default:
            return state;
    }
}

//este state no hace referencia al state global de la aplicacion,
//sino al estado que maneja este reducer.
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);