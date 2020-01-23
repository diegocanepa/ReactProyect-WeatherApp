import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropsTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,   
    SUN,  
    RAIN,  
    SNOW,
    WINDY,
} from '../../constants/weathers.js';

const location = "Buenos Aires, ar";
const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
/*
UNA FORMA DE TRANSFORMAR LOS DATOS DE KELVIN A CELSIUS, 
PERO VAMOS A USAR UNA LIBRERIA NOSOTROS
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
*/
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {
    constructor() {
        super();
        //this.state solo se puede usar en el constructor
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    };

       
    //FUNCION QUE SE EJECUTA CUANDO SE TOCA EL BOTON CON EL EVENTO ONCLICK
    handleUpdateClick = () =>{
        /*
        lo que hace el fetch es que te permite el retorno 
        de los datos de la appi. SI o SI se le tiene que mandar el
        URL
        */
        fetch(api_weather).then((resolve) => {
            console.log(resolve);
            
            return resolve.json();
        }).then((data) => {
            const newWeather = this.getData(data);
            console.log(newWeather)
            debugger;
            this.setState({
                data: newWeather,
            });
        });
    };


    render() {
        const{city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data = {data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
};


export default WeatherLocation;