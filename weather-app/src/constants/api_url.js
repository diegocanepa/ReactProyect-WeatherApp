const location = "Buenos Aires, ar";
const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
/*
UNA FORMA DE TRANSFORMAR LOS DATOS DE KELVIN A CELSIUS, 
PERO VAMOS A USAR UNA LIBRERIA NOSOTROS
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
*/
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


export default api_weather;