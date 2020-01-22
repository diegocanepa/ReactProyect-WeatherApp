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

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 25,
    weatherState: WINDY,
    humidity: 50,
    wind: '30 m/s',
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
        console.log("Actualizdo");
        this.setState({
            city:"Cordoba",
            data: data2,
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