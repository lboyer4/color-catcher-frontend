import React, { Component } from 'react';
import './_Palettes.scss';
import { connect } from 'react-redux';
import { addPalette, deletePalette } from '../../actions';
import PropTypes from 'prop-types';

export class Palettes extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		}
	}

	handleChange = (e) => {
		this.setState({name: e.target.value});
	};

	addPalette = () => {
		const colors = this.props.palette.reduce((acc, colorObject, index) => {
			acc[`color_${index+1}`] = colorObject.color.slice(1)
			return acc
		}, {})
		
		const newPalette = {...colors, name: this.state.name, project_id: this.props.project.id}
		this.postPalette(newPalette)
		}

	postPalette = (palette) => {
		let options = {
	    method: "POST",
	    headers: { "Content-Type": "application/json" },
	    body: JSON.stringify(palette)
    }
		fetch('http://localhost:3001/api/v1/palettes', options)
		.then(response => {
			if(!response.ok) {
				throw Error('Error posting palette')
			} else {
				return response
			}
		})
		.then(result => result.json())
		.then(body => this.props.addPalette({...palette, id: body.id}))
	}

		deletePalette = (e) => {
			let options = {
				method: "DELETE"
			};
			const paletteIdToDelete = e.target.parentElement.getAttribute('id')
			fetch(`http://localhost:3001/api/v1/palettes/${paletteIdToDelete}`, options)
			this.props.deletePalette(paletteIdToDelete)
		}


	render() {
		const matchingPalettes = this.props.palettes && this.props.palettes.filter(palette => {
			return palette.project_id === this.props.project.id
		});

		const createPaletteInput =
			<div> 
				<input className='palette-name' placeholder='Name your palette!' type='text' onChange={this.handleChange} value={this.state.name} />
				<button className='add-palette-btn' onClick={this.addPalette}>Add Palette </button>
			</div>

		const displayInput = this.props.project.name && createPaletteInput

		const displayPalettes = matchingPalettes && matchingPalettes.map(palette => {
				return (
					<div className='palette-container' key={palette.id}>
						<h2>{palette.name}</h2>
						<div className='color-holder' id={palette.id}>
						<div className='picked-color' style={{backgroundColor: `#${palette.color_1}`}}>
						</div>
						<div className='picked-color' style={{backgroundColor: `#${palette.color_2}`}}>
						</div>
						<div className='picked-color' style={{backgroundColor: `#${palette.color_3}`}}>
						</div>
						<div className='picked-color' style={{backgroundColor: `#${palette.color_4}`}}>
						</div>
						<div className='picked-color' style={{backgroundColor: `#${palette.color_5}`}}>
						</div>
						<button className = 'delete-btn' onClick={this.deletePalette}>Delete Palette</button>
						</div>
				</div>
				);
			});


		return (
			<div className='palette-holder'>
				<h1>{this.props.project.name}</h1>
				{displayInput}

				{displayPalettes}
			</div>
		);
	};
};

export const mapStateToProps = (state) => ({
	project: state.project,
	palette: state.palette,
	palettes: state.palettes
});

export const mapDispatchToProps = (dispatch) => ({
	addPalette: (palette) => dispatch(addPalette(palette)),
	deletePalette: (id) => dispatch(deletePalette(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Palettes);

Palettes.propTypes = {
	addPalette: PropTypes.func,
	palette: PropTypes.array,
	palettes: PropTypes.array,
	project: PropTypes.object
}