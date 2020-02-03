import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
//import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10,
    humidity: 50,
    weatherState: 'normal',
    wind: '10 m/s',
};
*/

const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url = "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state= { forecastdata: null }
    }

    componentDidMount() {
        //se puede usar fetch o axios
        const url_forecast = `${url}?q= ${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        ); 
    }

    renderForecastItemsDays(){
        return <h1>render Items</h1>;
        //return (days.map( day => (<ForecastItem weekDay = {day} hour={10} data={data}></ForecastItem>)))
    }

    renderProgress = () => {
        return <h3>Cargando pronostico Extendido...</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemsDays() :
                    this.renderProgress()
                }
            </div>);
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;