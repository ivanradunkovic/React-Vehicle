import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewVehicle = ({VehicleStore}) => {

	const add = (e) => {
		e.preventDefault()
		VehicleStore.addVehicle(VehicleStore.newMake.current.value)	
	}

    return (
        <>
            <Link to="/"><button className="button closeNewButton">X</button></Link>
        	<div className="addForm">
            <h3 className="title">Add new vehicle</h3>
            <form>        
				<input className="addInput"
				type="text"
				placeholder="New vehicle make"
				ref={VehicleStore.newMake}/>

			<input className="addInput"
				type="text"
				placeholder="New vehicle model"
				ref={VehicleStore.newModel}/>

			<input className="addInput"
				type="text"
				placeholder="Vehicle image"
				ref={VehicleStore.newImage}/>   
			</form>
			
		<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save new vehicle</Link></button>
		</div>
	</>
	)
}

export default inject ('VehicleStore') (observer(AddNewVehicle))