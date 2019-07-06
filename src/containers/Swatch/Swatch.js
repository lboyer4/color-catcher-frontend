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
		const { palette } = this.props
		const paletteDisplay = palette.length && <section className='swatch-holder'>
				<div className='color' style={{backgroundColor: palette[0].color}}></div>
				<div className='color' style={{backgroundColor: palette[1].color}}></div>
				<div className='color' style={{backgroundColor: palette[2].color}}></div>
				<div className='color' style={{backgroundColor: palette[3].color}}></div>
				<div className='color' style={{backgroundColor: palette[4].color}}></div>
			</section>
		 
		// console.log(this.props.palette[0]['color'])
		console.log(this.props.palette[0])
		return(
			<div>
				{paletteDisplay}
			</div>)
	}
}

const mapStateToProps = (state) => ({
	palette: state.palette
})

 const mapDispatchToProps = (dispatch) => ({
 	makePalette: (palette) => dispatch(makePalette(palette))
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Swatch);
