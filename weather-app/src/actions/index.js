//Definimos variable para evitar errores de tipeo
export const SET_CITY = 'SET_CITY';

//esta forma de crear las acciones se las demonima actionCreator
//La ponemos en otro lado para independizar el componente
//el Type es el identificador de la accion, a partir de este se reacciona porquue asi identificamos la accion

export const setCity = payload => ({ type: SET_CITY, payload });

const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url = "http://api.openweathermap.org/data/2.5/forecast"

export const fetchForecast = payload => {
    return dispatch => {
        const url_forecast = `${url}?q= ${city}&appid=${api_key}`;
        
        // activar en el estado un indicador de busqueda de datos

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado en el resultado de la promise(fetch)
            }
        );
        return;
    };
};