import React, { Component } from 'react';
import '../App.css'

class Footer extends Component {

	render(){
		return(
			<footer className="footer">
				<div className="footerText">
	                <h1>{this.props.text}</h1>
	            </div>
            </footer>
		)
	}
}

export default Footer;