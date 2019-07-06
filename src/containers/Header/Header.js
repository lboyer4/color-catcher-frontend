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

	generateColors = () => {
		let colorObject = {locked: false}
		for(let i = 0; i< 5; i++) {
		const characters = "0123456789ABCDEF";
		let color = '#'
			for(let i = 0; i< 6; i++)
				color+= characters[(Math.floor(Math.random() * 16))]
			colorObject = {...colorObject, color}
			this.state.colors.push(colorObject)
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