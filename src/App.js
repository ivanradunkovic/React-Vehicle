import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layouts/Header.js';
import Cars from './components/Cars.js';
import CarDetails from './components/CarDetails.js';
import VehicleMake from './components/VehicleMake.js';
import VehicleModel from './components/VehicleModel.js';
import AddNewCar from './components/AddNewCar.js';
import './App.css';
import Footer from './layouts/Footer.js';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header text="Car Showroom"/>
        <Route exact path="/" component={Cars} />
        <Route exact path="/car/:carId" component={CarDetails}/>
        <Route exact path="/makes/:carMake" component={VehicleMake} />
        <Route exact path="/models/:carModel" component={VehicleModel}/>
        <Route exact path="/add" component={AddNewCar} />
        <Footer text= "by Ivan Radunković 2020." />
      </Router>
      </div>
    )
}
}

export default App;