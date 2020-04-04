import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import VehicleMake from './components/VehicleMake.js';
import VehicleModel from './components/VehicleModel.js';

function App() {
  
  return (
      <div className="App">
      <Router>
        <Header text="Vehicle by Ivan Radunković"/>
        <Route exact path="/makes/:carMake" component={VehicleMake} />
        <Route exact path="/models/:carModel" component={VehicleModel}/>
      </Router>
      </div>
    )
}

export default App;
