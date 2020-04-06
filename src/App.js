import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import VehicleDetails from './components/VehicleDetails.js';
import VehicleMake from './components/VehicleMake.js';
import VehicleModel from './components/VehicleModel.js';
import AddNewVehicle from './components/AddNewVehicle.js';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header text="Vehicle App"/>
        <Route exact path="/car/:carId" component={VehicleDetails}/>
        <Route exact path="/makes/:vehicleMake" component={VehicleMake} />
        <Route exact path="/models/:vehicleModel" component={VehicleModel}/>
        <Route exact path="/add" component={AddNewVehicle} />
      </Router>
      </div>
    )
}
}

export default App;
