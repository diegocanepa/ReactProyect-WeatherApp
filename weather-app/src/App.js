import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Cordoba,ar',
  'Bogota,col',
  'Madrid,es',
  'Washington,us',
];

class App extends Component {
  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
  return (
    <div className="App">
      <LocationList 
          cities= {cities} 
          onSelectedLocation = {this.handleSelectedLocation}
      />
    </div>
    );
  }
}

export default App;
