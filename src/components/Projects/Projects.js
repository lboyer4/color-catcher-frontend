import React, { Component } from 'react';
import './_Projects.scss';
import { connect } from 'react-redux';
import { addProjects, deleteProject } from '../../actions';


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
		let projects = [...this.props.projects]
		projects.push(this.state.title)
		this.postProject(this.state.title)
	}

	postProject = (title) => {
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
				response.body.on('readable', (stream) => {
					console.log(stream.read())
				})
			}
		})
		.catch(error => console.log(error))
	}

	deleteProject = (e) => {
		let options = {
      method: "DELETE"
    };
		const idToDelete = e.target.getAttribute('data-key')
		this.props.deleteProject(idToDelete)
		fetch(`http://localhost:3001/api/v1/project/${idToDelete}`, options)
	}

	render() {
		const projectNames = this.props.projects.length ? this.props.projects.map(project => {
			return (
				<div key={project.id}>
					<h2>{project.name}</h2>
					<button data-key={project.id} onClick={this.deleteProject}>
						Delete
					</button>
				</div> 
			)
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
	addProjects: (projects) => dispatch(addProjects(projects)),
	deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);