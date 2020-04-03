import React, { Component } from 'react';
import '../App.css'

class Header extends Component {

	render(){
		return(
			<header className="header">
				<div className="headerText">
	                <h1>{this.props.text}</h1>
	            </div>
	                <img src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90MBC891A021001.jpg" alt="header" className="headerImage"/>
            </header>
		)
	}
}

export default Header;