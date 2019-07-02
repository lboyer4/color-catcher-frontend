import React, { Component } from 'react';
import './_App.scss';
import { Header } from '../Header/Header.js'

class App extends Component {
	constructor() {
		super();
		this.state = {
			colors: []
		}
	}

	render() {
		return(
			<div>
				<Header />
				<h1> hi </h1>
			</div>
		)
	}
}


export default App;