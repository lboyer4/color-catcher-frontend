import React, { Component } from 'react';
import './_Projects.scss';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			projects: []
		}
	}

	handleChange = (e) => {
		this.setState({title: e.target.value})   
  }

	makeProject = (e) => {
		e.preventDefault()
		let projects = this.state.projects
		projects.push(this.state.title)
		this.setState({ projects })
		//post project name to backend
	}

	render() {
		const projectNames = this.state.projects.length ? this.state.projects.map(name => {
			return <h2>{name}</h2>
		}) : ''
		return (
			<div className='project-holder'>
				<form> 
					<label>Name Project</label>
					<input
						type="text"
	          onChange={this.handleChange}
	          
	          name='title'
	         />
					<button onClick={this.makeProject}>Create</button> 
				</form>
				<h1>Projects</h1>
				{projectNames}
			</div>
		)
	}
}

export default Projects;