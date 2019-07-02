import React, { Component } from 'react';
import './_Swatch.scss';

class Swatch extends Component {
	constructor() {
		super();
		this.state = {
			colors: []
		}
	}

	//set state with color code props
	//use index to put in color divs

	render() {
		return(
			<section className='swatch-holder'>
				<div className='color'></div>
				<div className='color'></div>
				<div className='color'></div>
				<div className='color'></div>
			</section>)
	}
}

export default Swatch;