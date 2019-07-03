import React, { Component } from 'react';
import './_Swatch.scss';
import { makePalette } from '../../actions';
import { connect } from 'react-redux';

class Swatch extends Component {
	constructor() {
		super();
		this.state = {
			colors: []
		}
	}

componentDidMount = () => {
	this.generateColors()
}

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
	//set state with color code props
	//use index to put in color divs

	render() {
		return(
			<section className='swatch-holder'>
				<div className='color' style={{backgroundColor: this.state.colors[0]}}></div>
				<div className='color' style={{backgroundColor: this.state.colors[1]}}></div>
				<div className='color' style={{backgroundColor: this.state.colors[2]}}></div>
				<div className='color' style={{backgroundColor: this.state.colors[3]}}></div>
				<div className='color' style={{backgroundColor: this.state.colors[4]}}></div>
			</section>)
	}
}

const mapStateToProps = (state) => ({
	palette: state.palette
})

 const mapDispatchToProps = (dispatch) => ({
 	makePalette: (palette) => dispatch(makePalette(palette))
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Swatch);
