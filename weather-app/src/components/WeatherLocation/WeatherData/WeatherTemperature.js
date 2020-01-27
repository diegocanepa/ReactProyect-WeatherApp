import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers.js'
import './styles.css';

//se crea un diccionario, no es una funcion. es tipo un array asosiativo.
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};
const getWeatherIcon = (weatherState) =>{
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if (icon)
        return <WeatherIcons className="wicon" name = {icon} size ={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name = {"day-sunny"} size ={sizeIcon} />
};


const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C° `}</span>
    </div>
);

//PARA LA VALIDACION DE DATOS Y QUE ESTA SEA CORRECTA
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;