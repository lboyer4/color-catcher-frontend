import React, { Component } from 'react';
import './_App.scss';
import { Header } from '../../components/Header/Header.js';
import Swatch from '../Swatch/Swatch.js';
import Projects from '../../components/Projects/Projects.js';
import Palettes from '../../components/Palettes/Palettes.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			codes: []
		}
	}

	//generate hex code function
	// generateCodes = () => {
	// 	let code = ''
	// 	codes.push(code)
	// }
	
	componentDidMount = () => {
		//call generateCodes()
	}

	render() {
		return(
			<div>
				<Header />
				<Swatch />
				<section className='file-holder'>
					<Projects />
					<Palettes />
				</section>
			</div>
		)
	}
}


export default App;