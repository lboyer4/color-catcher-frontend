import React, { Component } from 'react';
import './_Projects.scss';
import { connect } from 'react-redux';
import { setProjects, deleteProject, addProject } from '../../actions';


export class Projects extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
		}
	}

	componentDidMount = () => {
		fetch('http://localhost:3001/api/v1/project')
		.then(response => response.json())
		.then(projects => this.props.setProjects(projects))
	}
	
	handleChange = (e) => {
		this.setState({title: e.target.value});  
  }

	makeProject = (e) => {
		e.preventDefault();
		this.postProject(this.state.title);
		this.setState({title: ''});
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
				return response
			}
		})
		.then(result => result.json())
		.then(body => this.props.addProject({id: body.id, name}))
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
	          value={this.state.title}
	         />
					<button onClick={this.makeProject}>Create</button> 
				</form>
				<h1>Projects</h1>
				{projectNames}
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	projects: state.project
})

export const mapDispatchToProps = (dispatch) => ({
	setProjects: (projects) => dispatch(setProjects(projects)),
	addProject: (project) => dispatch(addProject(project)),
	deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);