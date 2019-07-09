import React, { Component } from 'react';
import './_Palettes.scss';
import { connect } from 'react-redux';

export class Palettes extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		return (
			<div className='palette-holder'>
				<h1>{this.props.project.name}</h1>
			</div>)
	}
}

export const mapStateToProps = (state) => ({
	project: state.project
});

export default connect(mapStateToProps)(Palettes);