import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const CarDetails = ({ VehicleStore, match, location, props }) => {
    const {
    	params: { carId }
  	} = match

	const [ model, setModel ] = useState(VehicleStore.cars[carId].VehicleModel)
	const [ make, setMake ] = useState(VehicleStore.cars[carId].VehicleMake)
	const [ image, setImage ] = useState(VehicleStore.cars[carId].image)
	const [ id ] = useState(VehicleStore.cars[carId].id)
	const [ isInEditMode, setEdit ] = useState(false)

	const openEditView = () => {
		return (
			<div style={{textAlign: 'center'}}>
			<h3>New car make</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={make}
		  		ref={VehicleStore.makeInput}
		  		onChange={(event) => setMake(VehicleStore.makeInput.current.value)}
		  		/>
		  	<h3>New car model</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={model}
		  		ref={VehicleStore.modelInput}
		  		onChange={(event) => setModel(VehicleStore.modelInput.current.value)}
		  		/>
		  	<h3>New car image</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={image}
		  		ref={VehicleStore.imageInput}
		  		onChange={(event) => setImage(VehicleStore.imageInput.current.value)}
		  		/>
		  		<button className="button saveButton" onClick={updateCar}>Save</button>
		  	</div>
		)
	}

	const updateCar = () => {	
		VehicleStore.editCar(id)	
		setEdit(false)	
	}		

	const openDefaultView = () => {
		return (
		<>
			<div className="editAndCloseBtns">
				    <Link to="/"><button className="button closeButton">X</button></Link>
				    <button className="button editButton"onClick={() => setEdit(!isInEditMode)}>Edit</button>
			</div>
			<div className="carInfo">
			        <h2 className="carInfoTitle">{make}</h2>
			        <h3 className="carInfoTitle">{model}</h3>
				    <div>
				        <img src={image} alt="" className="detailsImage"/>
				    </div>
			</div>
		</>
		)
    }
    
	return isInEditMode ? openEditView() : openDefaultView()
}

export default inject ('VehicleStore') (observer(CarDetails))