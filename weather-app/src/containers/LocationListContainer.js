import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { setSelectedCity } from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    handleSelectedLocation = (city) => {
        //idividualiza la acction el type, se le pasa un actionCreator. permire pasar una accion
        this.props.setCity(city);
    };    

        
    render() {
        return (
            <LocationList 
                cities= {this.props.cities} 
                onSelectedLocation = {this.handleSelectedLocation} 
            />
                    
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
};

const mapDispatchToPropsAction =  dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
  });

export default connect(null, mapDispatchToPropsAction)(LocationListContainer);