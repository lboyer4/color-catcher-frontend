import React, { Component } from 'react';
import './_Palettes.scss';
import { connect } from 'react-redux';
import { addPalette } from '../../actions';

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
		
		const newPalette = {...colors, name: this.state.name, project_id: this.props.project.id}
		this.props.addPalette(newPalette)
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

export const mapDispatchToProps = (dispatch) => ({
	addPalette: (palette) => dispatch(addPalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(Palettes);