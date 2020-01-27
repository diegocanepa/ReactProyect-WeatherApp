import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '.';

const strToComponents = cities =>(
    cities.map( city => <WeatherLocation city = {city}/>)
);

const LocationList = ({cities}) => {
    return (
        <div>
            <WeatherLocation city = {"Buenos Aires,ar"}/>
            <WeatherLocation city = {"Cordoba,ar"}/>
            <WeatherLocation city = {"Madrid,es"}/>
            <WeatherLocation city = {"Buenos Aires,ar"}/>

        </div>
    );
};



LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;