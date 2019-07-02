import React, { Component } from 'react';
import './_App.scss';
import { Header } from '../Header/Header.js';
import Swatch from '../Swatch/Swatch.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			codes: []
		}
	}

	//generate hex code function
	
	componentDidMount = () => {
		//call generateCodes()
	}

	render() {
		return(
			<div>
				<Header />
				<Swatch />
			</div>
		)
	}
}


export default App;