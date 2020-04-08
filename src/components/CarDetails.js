import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const CarDetails = ({ CarStore, match, location, props }) => {
    const {
    	params: { carId }
  	} = match

	const [ model, setModel ] = useState(CarStore.cars[carId].VehicleModel)
	const [ make, setMake ] = useState(CarStore.cars[carId].VehicleMake)
	const [ image, setImage ] = useState(CarStore.cars[carId].image)
	const [ info, setInfo ] = useState(CarStore.cars[carId].info)
	const [ id ] = useState(CarStore.cars[carId].id)
	const [ isInEditMode, setEdit ] = useState(false)

	const openEditView = () => {
		return (
			<div style={{textAlign: 'center'}}>
			<h3>Change Make</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={make}
		  		ref={CarStore.makeInput}
		  		onChange={(event) => setMake(CarStore.makeInput.current.value)}
		  		/>
		  	<h3>Change Model</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={model}
		  		ref={CarStore.modelInput}
		  		onChange={(event) => setModel(CarStore.modelInput.current.value)}
		  		/>
		  	<h3>Add New Image URL</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={image}
		  		ref={CarStore.imageInput}
		  		onChange={(event) => setImage(CarStore.imageInput.current.value)}
		  		/>
			<h3>Change Info</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={info}
		  		ref={CarStore.infoInput}
		  		onChange={(event) => setInfo(CarStore.infoInput.current.value)}
		  		/>
		  		<button className="button saveButton" onClick={updateCar}>Save Changed Vehicle</button>
				<Link to="/"><button className="button closeNewButton">Close Changed Vehicle Editor</button></Link>
		  	</div>
		)
	}

	const updateCar = () => {	
		CarStore.editCar(id)	
		setEdit(false)	
	}		

	const openDefaultView = () => {
		return (
		<>
			<div className="editAndCloseBtns">
				    <Link to="/"><button className="button closeButton">Close</button></Link>
				    <button className="button editButton"onClick={() => setEdit(!isInEditMode)}>Edit</button>
			</div>
			<div className="carInfo">
			        <h2 className="carInfoTitleMake">{make}</h2>
			        <h3 className="carInfoTitleModel">{model}</h3>
					<h3 className="carInfoTitle">{info}</h3>
				    <div>
				        <img src={image} alt="" className="detailsImage"/>
				    </div>
			</div>
		</>
		)
	}

	return isInEditMode ? openEditView() : openDefaultView()
}

export default inject ('CarStore') (observer(CarDetails))