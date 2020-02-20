import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';

//Definimos variable para evitar errores de tipeo
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

//esta forma de crear las acciones se las demonima actionCreator
//La ponemos en otro lado para independizar el componente
//el Type es el identificador de la accion, a partir de este se reacciona porquue asi identificamos la accion

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})



const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url = "http://api.openweathermap.org/data/2.5/forecast"


export const setSelectedCity = payload => {
    //get state te devuelve el estado global de la app
    return (dispatch, getState) => {
        const url_forecast = `${url}?q= ${payload}&appid=${api_key}`;
        
        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload)); //llamas el disparch setCity para cambiar el estado de la ciuidad
        
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if ( date && (now - date) < 1 * 60 * 1000) {
            return;
        }
        
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


export const setWeather = payload => {
    return dispatch => {
        payload.forEach( city => {
            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then((data) => {
                return data.json();
            }).then((weather_data) => {
                const weather = transformWeather(weather_data);
                
                dispatch(setWeatherCity({city, weather}));
            }); 
        })
       
    }
}