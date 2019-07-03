import React, { Component } from 'react';
import './_Projects.scss';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: ['project one', 'project two']
		}
	}

	render() {
		return (
			<div className='project-holder'>
				<button className='create-project'> New Project +</button>
				<h1>Projects</h1>
				<h2>{this.state.projects[0]}</h2>
				<h2>{this.state.projects[1]}</h2>
			</div>
		)
	}
}

export default Projects;