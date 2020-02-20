import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities);
        this.props.setSelectedCity(this.props.city);
    }
    
    handleSelectedLocation = (city) => {
        //idividualiza la acction el type, se le pasa un actionCreator. permire pasar una accion
        this.props.setSelectedCity(city);
    };    

        
    render() {
        return (
            <LocationList 
                cities= {this.props.citiesWeather} 
                onSelectedLocation = {this.handleSelectedLocation} 
            />
                    
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};


/* esto comentado es igual a la funcion de abajo...
const mapDispatchToPropsAction =  dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});*/

const mapDispatchToPropsAction = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(LocationListContainer);