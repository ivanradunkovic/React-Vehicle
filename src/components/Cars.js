import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import trashIcon from '../assets/icons8-trash-48.png';
import Pagination from './Pagination.js';

@inject('CarStore')
@observer

class Cars extends Component {

	//Filter cars by vehicle make
	filter = (e) => {
	    e.preventDefault()
	    this.props.CarStore.filter = e.target.value
	}

	//Sort cars by vehicle make
	sort = (e) => {
		this.props.CarStore.isSorted = true
	}

	//Delete car
	delete = (id) => {
		console.log(id)
		this.props.CarStore.removeCar(id)
	}

  	//Page numbers
	paginate = (pageNumber) => {
		this.props.CarStore.setPage(pageNumber)
	}

	render() {
		const { filter } = this.props.CarStore
		const filterAndSort = () => {
			return (
				<>
				<div className="filterSort">
				  <button className="button sortButton" onClick={this.sort}>Sort A-Z</button>
			      <form onSubmit={e => this.filter(e)}>
			        <input className="filter"
			        type="text" 
			        placeholder="Filter by Make" 
			        value={filter}
			        onChange={this.filter.bind(this)}
			        />
			      </form>
	      </div>
	      </>
    	)
	}

		const addOption = () => {
			return (
			  <>
				<div className="addDiv">
				  <Link to={`/add`} style={{ textDecoration: 'none' }}><button className="button addButton">Add Vehicle</button></Link>
				</div>
			</>
	  )
	}

		const openDefaultView = () => {
			return (
			<>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.CarStore.currentCars.filter(car => car !== null).map((car) => (
				        <div key={car.id} className="car">
				        <button className="delete" title="Delete car" onClick={this.delete.bind(this, car.id)}>
				          <img src={trashIcon} alt="" className="deleteIcon" />
				        </button>
				          <img src={car.image} alt="" className="listImage"/>
				          <Link to={`/makes/${car.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
				          <Link to={`/models/${car.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="carSubtitle">{car.VehicleModel}</h4></Link>
				          {/* <Link to={`/car/${car.id}`} style={{ textDecoration: 'none' }}><h4 className="carTitle">Info</h4></Link> */}
				        </div>
	      ))}
	    </div>
	      		    <Pagination 
	      			        carsPerPage={this.props.CarStore.carsPerPage} 
	      			        totalCars={this.props.CarStore.filteredCars.length}
	      			        paginate={this.paginate}
	      		    />
	      </>
    )
  }

		const openSortedView = () => {
			return (
			<>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.CarStore.currentSortedCars.map((car) => (
				        <div key={car.id} className="car">
				          <button className="delete" title="Delete car" onClick={this.delete.bind(this, car.id)}>
				        	  <img src={trashIcon} alt="" className="deleteIcon" />
							  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(e) } }>
              Delete
				          </button>
				            <img src={car.image} alt="" className="listImage"/>
				              <Link to={`/makes/${car.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
				              <Link to={`/models/${car.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="carSubtitle">{car.VehicleModel}</h4></Link>
				        </div>
	      ))}
      </div>
		      	    <Pagination 
	      			        carsPerPage={this.props.CarStore.carsPerPage} 
	      			        totalCars={this.props.CarStore.sortedCars.length}
	      			        paginate={this.paginate}
	      		    />
		    </>
			)
		}

		return this.props.CarStore.isSorted ? openSortedView() : openDefaultView()
    }
  }

export default Cars;