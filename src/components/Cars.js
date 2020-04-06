import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('CarStore')
@observer

class Cars extends Component {

    render() {
		const { filter } = this.props.CarStore
    }
    
    const openDefaultView = () => {
        return (
        <>
        <div className="options">
        {addOption()}
        </div>
            <div className="carsDiv">
                    <img src={car.image} alt="" className="listImage"/>
                    <Link to={`/makes/${car.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
                    <Link to={`/models/${car.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="carSubtitle">{car.VehicleModel}</h4></Link>
                    <Link to={`/car/${car.id}`} style={{ textDecoration: 'none' }}><h4 className="carTitle">+</h4></Link>
                    </div>
                ))}

export default Cars;