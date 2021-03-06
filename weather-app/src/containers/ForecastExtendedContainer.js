import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended';
import { getForecastDataFromCities, getCity } from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData } = this.props;
        return (
            this.props.city &&  
            <ForecastExtended city={city} forecastData ={forecastData}> 
            </ForecastExtended>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = state =>({
    city: getCity(state),
    //forecastData: cities[city] && cities[city].forecastData,
    forecastData: getForecastDataFromCities(state),
});

export default connect(mapStateToProps,null)(ForecastExtendedContainer);