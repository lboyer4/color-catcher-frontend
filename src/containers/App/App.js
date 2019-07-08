import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header.js';
import Swatch from '../Swatch/Swatch.js';
import Projects from '../../components/Projects/Projects.js';
import Palettes from '../../components/Palettes/Palettes.js';
import { addProjects } from '../../actions';
import { connect } from 'react-redux';
class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	getPalettes = (palettes) => {
		console.log(palettes)
	}

	render() {
		return(
			<div>
				<Header />
				<Swatch />
				<section className='file-holder'>
					<Projects />
					<Palettes />
				</section>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	addProjects: (projects) => dispatch(addProjects(projects))
});

export default connect(null, mapDispatchToProps)(App);