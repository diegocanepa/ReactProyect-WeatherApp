import Convert from 'convert-units'; 
import {  
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers.js';

const getTemp = (kelvin) => {
    return Number(Convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather =>{
    const {id} = weather;

    if(id<300){
        return THUNDER;
    }
    if(id<400){
        return DRIZZLE;
    }
    if(id<600){
        return RAIN;
    }
    if(id<700){
        return SNOW;
    }
    if(id === 800){
        return SUN;
    }
    return CLOUD;

}

const transformWeather = (weather_data) =>{
    const{humidity, temp } = weather_data.main;
    const{speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature, 
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
};

export default transformWeather;