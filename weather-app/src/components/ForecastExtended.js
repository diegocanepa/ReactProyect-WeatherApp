import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
//import transformForecast from './../services/transformForecast';

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
const api_key = "bc652012ca8d9f42b17205d98def2d6e";
const url = "http://api.openweathermap.org/data/2.5/forecast"
*/

const renderForecastItemsDays = (forecastdata) => 
{
    return forecastdata.map( forecast => 
            (<ForecastItem 
                key = {`${forecast.weekDay}${forecast.hour}`}
                weekDay = {forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>  
            </ForecastItem>)
        )
}

const renderProgress = () => {
    return <h3>Cargando pronostico Extendido...</h3>
}

const ForecastExtended = ({city, forecastData}) => (
    
    /*
    constructor(){
        super();
        this.state= { forecastdata: null }
    }

    //SOLAMENTE RENDERIZADA UNA VEZ YA QUE EL COMPONENTDIDMOUNT 
    //SUCEDE UNA VEZ EN EL CICLO DE VIDA DE UN COMPONENTE
    componentDidMount() {
        
        //se puede usar fetch o axios
        const url_forecast = `${url}?q= ${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
         
        this.updateCity(this.props.city);
    }
    
    //SE UTILIZA PARA REALIZAR ACTUALIZACIONES EN EL COMPONENTE 
    //CAUNDO CAMBIA UNA PROPIEDAD
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const url_forecast = `${url}?q= ${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }
    */

    <div>
        <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
        {forecastData ?
            renderForecastItemsDays(forecastData) :
            renderProgress()
        }
    </div>
);


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;