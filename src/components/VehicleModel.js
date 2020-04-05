import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const VehicleModel = ({ VehicleStore, match, location, props}) => {
    const {
    	params: { vehicleModel }
  	} = match

  	return (
  		<>
  		<Link to="/"><button className="button backButton">Back</button></Link>
  		<h3 className="title">Models</h3>
  		<div className="vehiclessDiv">
      		{VehicleStore.filteredVehicles.filter(vehicle => vehicle !== null && vehicle.VehicleModel === vehicleModel).map((vehicle) => (
			    <div key={vehicle.id} className="vehicle">
		        <img src={vehicle.image} alt="" className="listImage"/>
		        <Link to={`/makes/${vehicle.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="vehicleTitle">{vehicle.VehicleMake}</h3></Link>
		        <Link to={`/models/${vehicle.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="vehicleSubtitle">{vehicle.VehicleModel}</h4></Link>
		        <Link to={`/vehicle/${vehicle.id}`} style={{ textDecoration: 'none' }}><h4 className="vehicleTitle">Details</h4></Link>
		        </div>
        	))}
      	</div>
    	</>
  	)

}

export default inject ('VehicleStore') (observer(VehicleModel))