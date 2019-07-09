import React, { Component } from 'react';
import './_Palettes.scss';
import { connect } from 'react-redux';

export class Palettes extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		}
	}

	handleChange = (e) => {
		this.setState({name: e.target.value})
	}

	addPalette = () => {
		const colors = this.props.palette.reduce((acc, colorObject, index) => {

			acc[`color_${index+1}`] = colorObject.color.slice(1)
			return acc
		}, {})
		console.log('colors colors colors', colors)
		// const newPalette = {name: this.state.name, }
		// this.props.addPalette()
		// console.log(this.props.palette)
	}

	render() {
		return (
			<div className='palette-holder'>
				<h1>{this.props.project.name}</h1>
				<input placeholder='Name your palette!' type='text' onChange={this.handleChange} value={this.state.name} />
				<button onClick={this.addPalette}>Add Palette </button>

			</div>)
	}
}

export const mapStateToProps = (state) => ({
	project: state.project,
	palette: state.palette
});



export default connect(mapStateToProps)(Palettes);