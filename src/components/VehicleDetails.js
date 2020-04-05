import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const VehicleDetails = ({ VehicleStore, match, location, props }) => {
    const {
    	params: { vehicleId }
  	} = match

	const [ model, setModel ] = useState(VehicleStore.vehicles[vehicleId].VehicleModel)
	const [ make, setMake ] = useState(VehicleStore.vehicles[vehicleId].VehicleMake)
	const [ image, setImage ] = useState(VehicleStore.vehicles[vehicleId].image)
	const [ id ] = useState(VehicleStore.vehicles[vehicleId].id)
	const [ isInEditMode, setEdit ] = useState(false)

	const openEditView = () => {
		return (
			<div style={{textAlign: 'center'}}>
			<h3>New vehicle make</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={make}
		  		ref={VehicleStore.makeInput}
		  		onChange={(event) => setMake(VehicleStore.makeInput.current.value)}
		  		/>
		  	<h3>New vehicle model</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={model}
		  		ref={VehicleStore.modelInput}
		  		onChange={(event) => setModel(VehicleStore.modelInput.current.value)}
		  		/>
		  	<h3>New vehicle image</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={image}
		  		ref={VehicleStore.imageInput}
		  		onChange={(event) => setImage(VehicleStore.imageInput.current.value)}
		  		/>
		  		<button className="button saveButton" onClick={updateVehicle}>Save</button>
		  	</div>
		)
	}

	const updateVehicle = () => {	
		VehicleStore.editVehicle(id)	
		setEdit(false)	
	}		

	const openDefaultView = () => {
		return (
		<>
			<div className="editAndCloseBtns">
				    <Link to="/"><button className="button closeButton">X</button></Link>
				    <button className="button editButton"onClick={() => setEdit(!isInEditMode)}>Edit</button>
			</div>
			<div className="vehicleInfo">
			        <h2 className="vehicleInfoTitle">{make}</h2>
			        <h3 className="vehicleInfoTitle">{model}</h3>
				    <div>
				        <img src={image} alt="" className="detailsImage"/>
				    </div>
			</div>
		</>
		)
    }
    
	return isInEditMode ? openEditView() : openDefaultView()
}

export default inject ('VehicleStore') (observer(VehicleDetails))