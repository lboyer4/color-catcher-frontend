import React, { Component } from 'react';
import './_Swatch.scss';
import { makePalette } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Swatch extends Component {
	handleLock = (e) => {
		const index = e.target.parentElement.getAttribute('data-key')
		let newColors = this.props.palette
		newColors[index].locked = !newColors[index].locked
		this.props.makePalette(newColors)
	}

	render() {
		const { palette } = this.props
		const paletteDisplay = palette.length && 
			palette.map((element, index) => {
				return <div className='color' key={index} data-key={index} style={{backgroundColor: element.color}}>
				<h1 className='hex-code'>{element.color}</h1>
				<h2 className='catch' onClick={this.handleLock}>{element.locked ? 'release' : 'catch'}</h2>
				</div>
			})
			
		return(
			<section className='swatch-holder'>
				{paletteDisplay}
			</section>)
	}
}

export const mapStateToProps = (state) => ({
	palette: state.palette
})

export const mapDispatchToProps = (dispatch) => ({
 	makePalette: (palette) => dispatch(makePalette(palette))
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Swatch);

 Swatch.propTypes = {
	makePalette: PropTypes.func,
	palette: PropTypes.array
 }
