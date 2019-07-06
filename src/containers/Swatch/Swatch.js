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

	componentDidUpdate = () => {
		console.log('redux props', this.props.palette)
		console.log('state', this.state.colors)
		if(this.state.colors !== this.props.palette){
			this.newColors()
		}
	}

	newColors = () => {
		this.setState({colors: this.props.palette})
	}

	handleClick = (e) => {
		console.log(e.target)
	}

	render() {
		const { palette } = this.props
		console.log('pal', palette)
		
		const paletteDisplay = palette.length && 
			palette.map((element, index) => {
				return <div className='color' key={index} style={{backgroundColor: element.color}} onClick={this.handleClick}>
				<h1>{element.color}</h1>
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
