import React from 'react';
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


const WeatherData = () => (
    <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={20} 
            weatherState={WINDY}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);


export default WeatherData;