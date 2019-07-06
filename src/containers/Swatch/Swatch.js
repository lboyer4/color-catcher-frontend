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

	//set state with color code props
	//use index to put in color divs

	render() {
		console.log(this.props.palette)
		return(
			<section className='swatch-holder'>
				<div className='color' style={{backgroundColor: this.props.palette[0]}}></div>
				<div className='color' style={{backgroundColor: this.props.palette[1]}}></div>
				<div className='color' style={{backgroundColor: this.props.palette[2]}}></div>
				<div className='color' style={{backgroundColor: this.props.palette[3]}}></div>
				<div className='color' style={{backgroundColor: this.props.palette[4]}}></div>
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
