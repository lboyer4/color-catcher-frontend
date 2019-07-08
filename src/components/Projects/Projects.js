import React, { Component } from 'react';
import './_Projects.scss';
import { connect } from 'react-redux';
import { addProjects } from '../../actions';


class Projects extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			projects: []
		}
	}

	componentDidMount = () => {
		fetch('http://localhost:3001/api/v1/project')
		.then(response => response.json())
		.then(projects => this.props.addProjects(projects))
	}

	getProjects = (projects) => {
		console.log('here are the projects', projects)
		let allProjects = this.state.projects;
		projects.forEach(project => {
			allProjects.push(project)
		})
	}
	
	handleChange = (e) => {
		this.setState({title: e.target.value})   
  }

	makeProject = (e) => {
		e.preventDefault()
		let projects = this.state.projects
		projects.push(this.state.title)
		this.setState({ projects })
		this.postProject(this.state.title)
	}

	postProject = (title) => {
		console.log(title)
		let name = title
		let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name
      })
    };

		fetch('http://localhost:3001/api/v1/project', options)
		.then(response => {
			if(!response.ok) {
				throw Error('Error posting project')
			} else {
				console.log(response)
			}
		})
		.catch(error => console.log(error))
	}

	render() {
		const projectNames = this.props.projects.length ? this.props.projects.map(project => {
			console.log('where is this', project)
			return <h2>{project.name}</h2>
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

const mapStateToProps = (state) => ({
	projects: state.project
})

const mapDispatchToProps = (dispatch) => ({
	addProjects: (projects) => dispatch(addProjects(projects))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);