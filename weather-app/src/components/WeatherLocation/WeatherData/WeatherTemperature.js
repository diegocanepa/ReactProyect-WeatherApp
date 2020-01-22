import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,   
    SUN,  
    RAIN,  
    SNOW,
    WINDY,
} from '../../../constants/weathers.js'
import './styles.css';

//se crea un diccionario, no es una funcion. es tipo un array asosiativo.
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};
const getWeatherIcon = (weatherState) =>{
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name = {icon} size ="2x" />
    else
        return <WeatherIcons name = {"day-sunny"} size ="2x" />
};


const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}C° `}</span>
    </div>
);

//PARA LA VALIDACION DE DATOS Y QUE ESTA SEA CORRECTA
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;