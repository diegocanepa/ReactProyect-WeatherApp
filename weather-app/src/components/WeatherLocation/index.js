import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropsTypes from 'prop-types';

const WeatherLocation = () => (
    <div>
        <Location city={"Cordoba"} />
        <WeatherData />
    </div>
);


export default WeatherLocation;