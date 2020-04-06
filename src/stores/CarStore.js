import React from 'react';
import { observable, action } from 'mobx';

class CarStore {
	@observable makeInput = React.createRef();
	@observable modelInput = React.createRef();
	@observable imageInput = React.createRef();
	@observable isSorted = false;
	@observable newId = React.createRef();
	@observable newMake = React.createRef();
	@observable newModel = React.createRef();
	@observable newImage = React.createRef();

	@observable cars = [
		{ id: "0", VehicleMake: "Hyundai", VehicleModel: "i30", image:"https://p7.hiclipart.com/preview/240/803/583/hyundai-motor-company-car-hyundai-i30-go-hyundai-tucson-hyundai-i30.jpg" },
		{ id: "1", VehicleMake: "Volkswagen", VehicleModel: "Golf (Mk8)", image:"https://cdn.motor1.com/images/mgl/OYNeX/s3/volkswagen-golf-8-2019.jpg" },
		{ id: "2", VehicleMake: "Škoda", VehicleModel: "Octavia (Mk4) Combi", image: "https://360view.hum3d.com/zoom/Skoda/Skoda_Octavia_Mk4_combi_2020_1000_0001.jpg" },
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M340i xDrive", image: "https://the-drive.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fp90323745_highres_the-all-new-bmw-3-se-e1542124443158.jpg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=4c3c15eb72a86204b03b02a0569d969b" },
		{ id: "4", VehicleMake: "Mercedes", VehicleModel: "C63", image: "https://thumbor.forbes.com/thumbor/711x295/https://blogs-images.forbes.com/dougnewcomb/files/2018/05/Exterior.jpg?width=960" },
		{ id: "5", VehicleMake: "Citroen", VehicleModel: "C4 Picasso", image: "https://i7.pngguru.com/preview/663/741/68/citroen-c4-picasso-car-citroen-ds-citroen-c4-cactus-citroen.jpg" },
		{ id: "6", VehicleMake: "Hyundai", VehicleModel: "Tuscon", image:"https://www.irwinhyundai.com/assets/stock/colormatched_01/white/640/cc_2020hys02_01_640/cc_2020hys020105_01_640_r2u.jpg?height=400" }, 
		{ id: "7", VehicleMake: "Škoda", VehicleModel: "Superb", image: "https://d3h256n3bzippp.cloudfront.net/skoda-superb-iv-white-background.jpg" },
		{ id: "8", VehicleMake: "BMW", VehicleModel: "M4", image: "https://www.pngitem.com/pimgs/m/154-1541467_new-2020-bmw-m4-coupe-bmw-m4-2019.png" },
		{ id: "9", VehicleMake: "Toyota", VehicleModel: "C-HR", image: "https://cdn-ds.com/blogs-media/sites/232/2019/10/07162921/WhatE28099s-New-for-the-2020-Toyota-C-HR-Design_o.jpg" },
		{id: "10", VehicleMake: "Volkswagen", VehicleModel: "Passat", image: "https://www.greeleyvolkswagen.com/assets/stock/colormatched_01/white/640/cc_2020vwc04_01_640/cc_2020vwc040002_01_640_0q0q.jpg?height=400"},
		{id: "10", VehicleMake: "Volkswagen", VehicleModel: "Tiguan", image: "https://p7.hiclipart.com/preview/98/115/693/2018-volkswagen-tiguan-car-sport-utility-vehicle-volkswagen-eos-2018.jpg"},
		{id: "11", VehicleMake: "Škoda", VehicleModel: "Fabia Estate", image: "https://cdn1.carbuyer.co.uk/sites/carbuyer_d7/files/car_images/skoda-fabia-estate-2018-cutout.jpg"},
		{id: "12", VehicleMake: "Ford", VehicleModel: "Mondeo", image: "https://purepng.com/public/uploads/medium/purepng.com-ford-mondeo-red-carcarvehicletransportford-96152463841846uwj.png"},
		{id: "13", VehicleMake: "Audi", VehicleModel: "A5 Sportback", image: "https://images.dealer.com/ddc/vehicles/2020/Audi/S5/Hatchback/color/Daytona%20Gray%20Pearl%20Effect-6Y6Y-70,72,68-640-en_US.jpg"},
		{id: "14", VehicleMake: "Hyundai", VehicleModel: "i20", image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/11/Photos/car--621x414.jpg"},
		{id: "15", VehicleMake: "Audi", VehicleModel: "Q7", image: "https://pictures.dealer.com/aoa-images/42f3217ec5c4c42feeb7fae938ba6396.png"}
	]

	
  //add a new car 
  @action addCar = ({id, VehicleMake, VehicleModel, image}) => {
	  this.cars.push({
		  id: ++this.lastId, 
		  VehicleMake: this.newMake.current.value, 
		  VehicleModel: this.newModel.current.value,
		  image: this.newImage.current.value
	  })
  }
}


const store = new CarStore()

export default store