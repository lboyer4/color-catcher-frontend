import React, { Component } from 'react';
import './_Projects.scss';
import { connect } from 'react-redux';
import { setProjects, deleteProject, addProject, pickProject, setPalettes } from '../../actions';
import PropTypes from 'prop-types';

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

		fetch('http://localhost:3001/api/v1/palettes')
		.then(response => response.json())
		.then(palettes => this.props.setPalettes(palettes))
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
		const idToDelete = e.target.parentElement.getAttribute('data-key')
		this.props.deleteProject(idToDelete)
		fetch(`http://localhost:3001/api/v1/project/${idToDelete}`, options)
	}

	chooseProject = (e) => {
		const id = e.target.parentElement.getAttribute('data-key')
		const project = this.props.projects.find(project => {
			return project.id === Number(id)
		})
		this.props.pickProject(project)
	}

	render() {
		const projectNames = this.props.projects.length ? this.props.projects.map(project => {
			return (
				<div data-key={project.id} key={project.id}>
					<h4 onClick={this.chooseProject}>{project.name}<button className="delete-button" onClick={this.deleteProject}>
						X
					</button></h4>
					
				</div> 
			)
		}) : ''

		return (
			<div className='project-holder'>
				<h1 className='project-name'>Your Projects</h1>
				{projectNames}
				<form> 
					<input
						type='text'
	          onChange={this.handleChange}
	          name='title'
	          placeholder="Name Your Project"
	          value={this.state.title}
	         />
					<button onClick={this.makeProject}>Create</button> 
				</form>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	projects: state.projects,
	project: state.project
});

export const mapDispatchToProps = (dispatch) => ({
	setProjects: (projects) => dispatch(setProjects(projects)),
	addProject: (project) => dispatch(addProject(project)),
	pickProject: (project) => dispatch(pickProject(project)),
	deleteProject: (id) => dispatch(deleteProject(id)),
	setPalettes: (palettes) => dispatch(setPalettes(palettes))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

Projects.propTypes = {
	addProject: PropTypes.func,
	deleteProject: PropTypes.func,
	pickProject: PropTypes.func,
	project: PropTypes.object,
	projects: PropTypes.array,
	setPalettes: PropTypes.func,
	setProjects: PropTypes.func
}