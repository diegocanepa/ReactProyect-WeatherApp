import React /*{ Component }*/ from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
//import transformWeather from './../../services/transformWeather';
//import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './styles.css';

/*
    constructor(props) {
        super(props);
        //this.state solo se puede usar en el constructor
        const{ city } = props;
        this.state = {
            city,
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
    
    //NO SE USA MAS - DESACONSEJADO
    componentWillMount(){
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    

       
    //FUNCION QUE SE EJECUTA CUANDO SE TOCA EL BOTON CON EL EVENTO ONCLICK
    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);

        
        //lo que hace el fetch es que te permite el retorno 
        //de los datos de la appi. SI o SI se le tiene que mandar el
        //URL
        
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then((data) => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });
        });
    };
*/

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick = {onWeatherLocationClick}>
        <Location city={city} />
        {data ? 
            <WeatherData data = {data}/> :
            <CircularProgress size={50}/>
        }
    </div>
);


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),

}

export default WeatherLocation;