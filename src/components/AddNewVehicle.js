import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewVehicle = ({VehicleStore}) => {

	const add = (e) => {
		e.preventDefault()
		VehicleStore.addCar(VehicleStore.newMake.current.value)	
	}

    return (
        <>
            <Link to="/"><button className="button closeNewButton">X</button></Link>
            <div className="addForm">
            <h3 className="title">Add new vehicle</h3>
            <form>           
</form>
		<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save new vehicle</Link></button>
		</div>
	</>
	)
}

export default inject ('VehicleStore') (observer(AddNewVehicle))