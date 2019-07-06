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

	render() {
		const { palette } = this.props
		const paletteDisplay = palette.length && 
			palette.map((element, index) => {
				return <div className='color' key={index} style={{backgroundColor: element.color}}></div>
			})
			
		return(
			<section className='swatch-holder'>
				{paletteDisplay}
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
