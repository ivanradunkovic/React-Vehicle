import React from 'react';
import { observable, action, computed } from 'mobx';

class CarStore {
	@observable makeInput = React.createRef();
	@observable modelInput = React.createRef();
	@observable imageInput = React.createRef();
	@observable infoInput = React.createRef();
	@observable isSorted = false;
	@observable newId = React.createRef();
	@observable newMake = React.createRef();
	@observable newModel = React.createRef();
	@observable newImage = React.createRef();
	@observable newInfo = React.createRef();

	@observable cars = [
		{ id: "0", VehicleMake: "Hyundai", VehicleModel: "i30", image:"https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg", info: "The Hyundai i30 is a small family car manufactured by the South Korean manufacturer Hyundai Motor Company in Nošovice, Czech Republic, since 2007. The i30 shares its platform with the Kia Cee'd, available as a three-door hatchback (2012–2017), five door hatchback, five-door estate and five-door fastback (2017–present), with a choice of three petrol engines and two diesel engines, either with manual or automatic transmission." },
		{ id: "1", VehicleMake: "Volkswagen", VehicleModel: "Golf VIII", image:"https://thumbs.dreamstime.com/b/white-vw-golf-isolated-background-127917726.jpg", info: "The Volkswagen Golf Mk8 (also known as the Golf VIII) is a compact car, the eighth generation of the Volkswagen Golf and the successor to the Volkswagen Golf Mk7. It was introduced in Wolfsburg on 24 October 2019, and arrived in German showrooms in December 2019. The Golf Mk8 uses the same revised MQB platform as the upcoming fourth-generation Audi A3 and SEAT León." },
		{ id: "2", VehicleMake: "Škoda", VehicleModel: "Octavia Combi", image: "https://www.automobili.ba/wp-content/uploads/2019/12/Skoda-Octavia_Combi-12-696x522.jpg", info: "The Škoda Octavia is a small family car produced by the Czech manufacturer Škoda Auto since 1996. It shares its name with an earlier model produced between 1959 and 1971. Three generations of the modern-era Octavia model have been introduced to date, delivered with five-door liftback saloon or five-door estate styles only. The car is front engined, both front- or four-wheel drive are offered. Around five million units have been sold in its two decades of presence on the market."},
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M340i xDrive", image: "https://lh3.googleusercontent.com/proxy/tcH0h8CigVZr3k4il6S3NUGypt2dIV4HyADjIvRFfxFamTjO7_e6Y89oOeJKaEaqxVLqPItRn8ud8XlKKUyWNDkQIitRwCZM1Y-Gj7gR9XUE3HeuzLDz5l7GKK7fErf0qMvdBaFRB-I2qoNRU9ffWUmGv6TNP7ivE0dIK-KyTarcv80B8n9xBwAEvJN5VaHr09W82YjHJD0I5ANR135XdcpmNbVym8-FBqvEbs5-4ueMLuokBzR-hIhZM7i3Yb9O_7RKF9toq4O7w8bWL8NvpEVlmKYrdfGeCqfoAHi1li6K-yVqWCNB_08YWJMJGElsLmUanAF8ENVADNaUBDqTB3nK5qbx9ajrybEsQ6fagl5hDwhc6CQpjbaqUw", info: "The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986." },
		{ id: "4", VehicleMake: "Mercedes", VehicleModel: "C63", image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/c/coupe/byo/options/2020-AMG-C-CLASS-COUPE-MP-047.jpg", info: "The AMG C63 is one of the very best cars on sale. It takes a desirable but not especially interesting small Mercedes and creates a truly special vehicle. In fact, slightly awkwardly for AMG, the C63 is actually a better all-round coupe than the AMG GT, a superior fast wagon to any of its SUVs, and gives the bigger E63 a run for its money as a super-saloon." },
		{ id: "5", VehicleMake: "Volvo", VehicleModel: "S60", image: "https://www.tportal.hr/media/thumbnail/w1000/792440.jpeg", info:"The Volvo S60 is a compact luxury sedan manufactured and marketed by Volvo since 2000 and is now in its third generation.The first generation (2000–2009) was launched in autumn of 2000 in order to replace the S70 and was based on the P2 platform. It had a similar designed estate version called Volvo V70 and a sports version called S60 R. Styling clues were taken from the ECC concept car and the S80.The second generation (2010–2018) was released in 2010 for the 2011 model year and has its own estate version, known as the Volvo V60." },
		{ id: "6", VehicleMake: "Hyundai", VehicleModel: "Tuscon", image:"https://www.irwinhyundai.com/assets/stock/colormatched_01/white/640/cc_2020hys02_01_640/cc_2020hys020105_01_640_r2u.jpg?height=400", info: "The Hyundai Tucson (Korean: 현대 투싼) (pronounced Tu-són) is a compact crossover SUV produced by the South Korean manufacturer Hyundai since 2004. In the brand's lineup, the Tucson fits below the Santa Fe and Veracruz. It is named after the city of Tucson, Arizona." }, 
		{ id: "7", VehicleMake: "Škoda", VehicleModel: "Superb", image: "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg", info:"The Škoda Superb is a large family car that has been produced by the Czech car manufacturer Škoda Auto since 2001.The first generation of the modern Superb, produced from 2001 to 2008, was based on the VW B5 PL45+ platform. The second generation Superb used the B6 A6/PQ46 and was introduced in 2008. The third, and current, generation using the MQB platform, entered production in 2015." },
		{ id: "8", VehicleMake: "BMW", VehicleModel: "M4", image: "https://pvlimages.blob.core.windows.net/images/verylarge/AG10769_20062019_24.jpg", info:"The BMW M4 is a high-performance version of the BMW 4 Series automobile developed by BMW's motorsport division, BMW M GmbH.Part of the renumbering that splits the 3 Series coupé and convertible models from the 4 Series (to further differentiate it from the 3 Series), the M4 replaced the M3 coupé and convertible models." },
		{ id: "9", VehicleMake: "Toyota", VehicleModel: "C-HR", image: "https://www.cstatic-images.com/car-pictures/xl/usd00tos211a021001.png", info:"The Toyota C-HR (Japanese: トヨタ C-HR, Hepburn: Toyota Shīeichiāru) is a subcompact crossover SUV produced by Toyota. The development of the car began in 2013 that was led by Toyota chief engineer Hiroyuki Koba. The production version of the C-HR was unveiled at the March 2016 Geneva Motor Show and started production in November 2016. It was launched in Japan on 14 December 2016. It went on sale in Europe, Australia, South Africa and North America in early 2017, and in Southeast Asia, China and Taiwan in 2018. The name C-HR stands for Compact High Rider, Cross Hatch Run–about or Coupé High–Rider." },
		{id: "10", VehicleMake: "Volkswagen", VehicleModel: "Passat", image: "https://www.jutarnji.hr/autoklub/aktualno/cb276ac6-2019-vw-passat-facelift-8jpg/8350862/alternates/LANDSCAPE_980/cb276ac6-2019-vw-passat-facelift-8.jpg", info: "The Volkswagen Passat is a large family car manufactured and marketed by Volkswagen since 1973, and now in its eighth generation. It has been marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat. The successive generations of the Passat carry the Volkswagen internal designations B1, B2, etc.."},
		{id: "11", VehicleMake: "Volkswagen", VehicleModel: "Tiguan", image: "https://auto.ndtvimg.com/car-images/colors/volkswagen/tiguan/volkswagen-tiguan-tungsten-silver.png?v=", info: "The Volkswagen Tiguan is a compact crossover vehicle (CUV) manufactured by German automaker Volkswagen. Introduced in 2007, the first generation model uses the PQ46 platform of the B6 Generation Volkswagen Passat. All first generation (5N) Tiguans featured two row seating and transverse mounted four-cylinder engines."},
		{id: "12", VehicleMake: "Škoda", VehicleModel: "Fabia Estate", image: "https://cdn1.carbuyer.co.uk/sites/carbuyer_d7/files/car_images/skoda-fabia-estate-2018-cutout.jpg", info: "The Škoda Fabia is a supermini car produced by Czech manufacturer Škoda Auto since 1999. It is the successor of the Škoda Felicia, which was discontinued in 2001. The Fabia was available in hatchback, estate (named Fabia Combi) and saloon (named Fabia Sedan) body styles at launch, and since 2007, the second generation is offered in hatchback and estate versions. The third generation Fabia was launched in 2015."},
		{id: "13", VehicleMake: "Ford", VehicleModel: "Mondeo", image: "https://purepng.com/public/uploads/medium/purepng.com-ford-mondeo-red-carcarvehicletransportford-96152463841846uwj.png", info:"The Ford Mondeo is a large family car manufactured by Ford since 1993. The first Ford declared a 'world car', the Mondeo was intended to consolidate several Ford model lines worldwide (the European Ford Sierra, the Ford Telstar in Asia and Australia, and the Ford Tempo/Mercury Topaz of North America). The Mondeo nameplate is derived from Latin mundus, meaning 'world'."},
		{id: "14", VehicleMake: "Audi", VehicleModel: "A5 Sportback", image: "https://images.dealer.com/ddc/vehicles/2020/Audi/S5/Hatchback/color/Daytona%20Gray%20Pearl%20Effect-6Y6Y-70,72,68-640-en_US.jpg", info:"The A5 Sportback has four frameless doors and a long, tapering fastback like roofline, giving it a 'four door coupé like' appearance. While it shares many exterior cues with the A5 coupé, the Sportback's interior is similar to the A4 saloon; although all A5 models have same platform as the A4, the Sportback is closer in design to the A4 than the rest of the A5 family."},
		{id: "15", VehicleMake: "Hyundai", VehicleModel: "i20", image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/11/Photos/car--621x414.jpg", info:"The Hyundai i20 is a hatchback produced by Hyundai since 2008. The i20 made its debut at the Paris Motor Show in October 2008, and sits between the i10 and i30. It is a front wheel drive car, and is available in three and five door versions. The i20 replaces the Getz in nearly all of its markets, though the Getz was not phased out in most of the world until 2011."},
		{id: "16", VehicleMake: "Audi", VehicleModel: "Q7", image: "https://pictures.dealer.com/aoa-images/42f3217ec5c4c42feeb7fae938ba6396.png", info:"The Audi Q7 is a mid-size luxury SUV made by the German manufacturer Audi, unveiled in September 2005 at the Frankfurt Motor Show. Production of this seven-seater SUV began in the autumn of 2005 at the Volkswagen Bratislava Plant in Bratislava, Slovakia. It was the first SUV offering from Audi and went on sale in 2006. Later, Audi's second SUV, the Q5, was unveiled as a 2009 model. Audi has since unveiled a third SUV model, the Q3, which went on sale in the third quarter of 2011. The Q7 shares a Volkswagen Group MLB platform and chassis with the Bentley Bentayga, Lamborghini Urus, Porsche Cayenne and the Volkswagen Touareg."}
		// {id : "", VehicleMake: "", VehicleModel: "", image: "", info: ""}	You can add many cars as you want
	]

	@observable filter = "" //Filter cars by make

	@observable lastId = this.cars.slice(-1)[0].id

	@observable currentPage = 1 //When you start app you will be at first page
	@observable carsPerPage = 5 //How much cars will be shonw per page

	@observable indexOfLastCar = (this.currentPage * this.carsPerPage)
	@observable indexOfFirstCar = (this.indexOfLastCar - this.carsPerPage)
	
	@computed get currentCars () {
		return this.filteredCars.slice(this.indexOfFirstCar, this.indexOfLastCar)
	}

	@computed get filteredCars () {
		const matchesFilter = new RegExp(this.filter, "i")
		return this.cars.filter(car => car !== null).filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	@computed get currentSortedCars () {
		return this.sortedCars.slice(this.indexOfFirstCar, this.indexOfLastCar)
	}
	
	@computed get sortedCars () {
		return this.filteredCars.filter(car => car !== null).slice().sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
		
	}

  	//Add new car
 	@action addCar = ({id, VehicleMake, VehicleModel, image, info}) => {
	  this.cars.push({
		  id: ++this.lastId, 
		  VehicleMake: this.newMake.current.value, 
		  VehicleModel: this.newModel.current.value,
		  image: this.newImage.current.value,
		  info: this.newInfo.current.value
	  })
  }

	//Edit car
	@action editCar = (id) => {
		this.cars[id].VehicleModel = this.modelInput.current.value
		this.cars[id].VehicleMake = this.makeInput.current.value
		this.cars[id].image = this.imageInput.current.value
		this.cars[id].info = this.infoInput.current.value
	}
 

	//Delete car
	@action removeCar = (id) => {
		this.cars[id] = null
  	}

  	//Set page to chosen number of page
  	@action setPage = (pageNumber) => {
	  	this.currentPage = pageNumber
	  	this.indexOfLastCar = (this.currentPage * this.carsPerPage)
	  	this.indexOfFirstCar = (this.indexOfLastCar - this.carsPerPage)
  }

}

const store = new CarStore()

export default store