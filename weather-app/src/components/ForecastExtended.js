import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';


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

class ForecastExtended extends Component {
    renderForecastItemsDays(days){
        return (
        days.map( day => (<ForecastItem weekDay = {day} hour={10} data={data}></ForecastItem>))
        )
    }

    render() {
        const {city} = this.props;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
                {this.renderForecastItemsDays(days)}

            </div>
        )
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;