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

	handleLock = (e) => {
		const index = e.target.parentElement.getAttribute('data-key')
		console.log('state of colors', this.props.palette)
		let newColors = this.props.palette
		newColors[index].locked = !newColors[index].locked
		this.setState({colors: newColors})
	}

	render() {
		const { palette } = this.props
		const paletteDisplay = palette.length && 
			palette.map((element, index) => {
				console.log('element', element)
				return <div className='color' key={index} data-key={index} style={{backgroundColor: element.color}}>
				<h1>{element.color}</h1>
				<h2 onClick={this.handleLock}>{element.locked ? 'true' : 'false'}</h2>
				</div>
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
