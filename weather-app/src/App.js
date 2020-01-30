import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';


const cities = [
  'Buenos Aires,ar',
  'Cordoba,ar',
  'Bogota,col',
  'Madrid,es',
  'Washington,us',
];

class App extends Component {
  constructor() {
    super()
    //la sentencia set.state se usa solo en el constructor
    this.state = {city: null}
  }
  
  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
    this.setState({
      city: city
    })
  };

  render() {
    const {city} = this.state;
  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <LocationList 
          cities= {cities} 
          onSelectedLocation = {this.handleSelectedLocation}
        />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              {
              !city ?
                null :
                <ForecastExtended city={city}></ForecastExtended>
              }
            </div>
          </Paper> 
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default App;
