import transformForecast from './../services/transformForecast';

//Definimos variable para evitar errores de tipeo
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//esta forma de crear las acciones se las demonima actionCreator
//La ponemos en otro lado para independizar el componente
//el Type es el identificador de la accion, a partir de este se reacciona porquue asi identificamos la accion

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})



const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url = "http://api.openweathermap.org/data/2.5/forecast"
export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q= ${payload}&appid=${api_key}`;
        
        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload)); //llamas el disparch setCity para cambiar el estado de la ciuidad

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado en el resultado de la promise(fetch)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    };
};