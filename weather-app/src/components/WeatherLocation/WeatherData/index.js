import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import {
    CLOUD,
    CLOUDY,   
    SUN,  
    RAIN,  
    SNOW,
    WINDY,
} from '../../../constants/weathers.js'
//no hace falta indicar nombre de clase en este import y se pone la extension
import './styles.css';


const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    //descomponemos lo que viene en data, que es como un array asociativo
    //DESTRUCTURING
    //const {temperature, weatherState, humidity, wind} = data;
    return (
    <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);
};

WeatherData.propTypes = {
    /*
    validamos lo que seria el data que le llega a weatherData
    con el shape los que nos permite es validar un objeto que nosotros
    le mandamos y por eso es que debe ir con corchetes.
    */
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};


export default WeatherData;