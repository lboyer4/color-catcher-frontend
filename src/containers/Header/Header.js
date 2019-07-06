import React, { Component } from 'react';
import './_Header.scss';
import { makePalette } from '../../actions';
import { connect } from 'react-redux';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			colors: []
		}
	}

	componentDidMount = () => {
		console.log('hello')
	this.generateColors()
}

//instead of an array of strings, an array of objects
//add locked or unlocked properties to each object
//put function in header so it is accessible to the button for generating colors
// map through colors to make object with lock/unlock

	generateColors = () => {
		for(let i = 0; i< 5; i++) {
		const characters = "0123456789ABCDEF";
		let color = '#'
		for(let i = 0; i< 6; i++)
			color+= characters[(Math.floor(Math.random() * 16))]
		this.state.colors.push(color)
	}
	this.props.makePalette(this.state.colors);
}

	render() {
		return(
			<header>
				<h1>Color Catcher</h1>
				<button className='generate'>Generate Colors</button>
			</header>
		)
	}
}

const mapStateToProps = (state) => ({
	palette: state.palette
});

 const mapDispatchToProps = (dispatch) => ({
 	makePalette: (palette) => dispatch(makePalette(palette))
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Header);