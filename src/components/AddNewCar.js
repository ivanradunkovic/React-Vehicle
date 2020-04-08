import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewCar = ({CarStore}) => {

	const add = (e) => {
		e.preventDefault()
		CarStore.addCar(CarStore.newMake.current.value)	
	}

    return (
		<>
			<div className="addForm">
			<h3 className="title">NEW VEHICLE</h3>
			<form>
				<input className="addInput"
					type="text"
					placeholder="Make"
					ref={CarStore.newMake}
				/>
				<input className="addInput"
					type="text"
					placeholder="Model"
					ref={CarStore.newModel}
				/>
				<input className="addInput"
					type="text"
					placeholder="URL of Vehicle Image"
					ref={CarStore.newImage}
				/>
				<input className="addInput"
					type="text"
					placeholder="Info"
					ref={CarStore.newInfo}
				/>
			</form>
			<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save New Vehicle</Link></button>
			<Link to="/"><button className="button closeNewButton">Close New Vehicle Editor</button></Link>
			</div>
		</>
		)
	}
	
	export default inject ('CarStore') (observer(AddNewCar))