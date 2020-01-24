import React, { Component } from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import api_weather from './../../constants/api_url';
import WeatherData from './WeatherData';
import PropsTypes from 'prop-types';
import './styles.css';


class WeatherLocation extends Component {
    constructor() {
        super();
        //this.state solo se puede usar en el constructor
        this.state = {
            city: 'Buenos Aires',
            data: null,
        };
        console.log("constructor");
    };

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    /* NO SE USA MAS - DESACONSEJADO
    componentWillMount(){
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    */

       
    //FUNCION QUE SE EJECUTA CUANDO SE TOCA EL BOTON CON EL EVENTO ONCLICK
    handleUpdateClick = () =>{
        /*
        lo que hace el fetch es que te permite el retorno 
        de los datos de la appi. SI o SI se le tiene que mandar el
        URL
        */
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then((data) => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });
        });
    };


    render() {
        console.log("render");
        const{city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                {data ? 
                    <WeatherData data = {data}/> :
                    "Cargando..."
                }
            </div>
        )
    }
};


export default WeatherLocation;