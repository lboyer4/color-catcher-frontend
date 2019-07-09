import React from 'react';
import { shallow } from 'enzyme';
import { Projects, mapStateToProps, mapDispatchToProps } from './Projects'
import { setProjects, deleteProject, addProject } from '../../actions';

describe('Projects', () => {
	let wrapper;
	let mockSetProjects;
	let mockDeleteProject;
	let mockAddProject;
	let mockProjects;

	beforeEach(() => {
		mockAddProject = jest.fn();
		mockDeleteProject = jest.fn();
		mockSetProjects = jest.fn();
		mockProjects = [{
			name: 'project one',
			id: 1
		}]

		wrapper = shallow(
			<Projects 
				setProjects={mockSetProjects}
				addProject={mockAddProject}
				deleteProject={mockDeleteProject}
				projects={mockProjects}
			/>
		);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mapStateToProps', () => {
		it('should return an array of objects', () => {
			const mockState = {
			palette: [
				{	locked: false,
					color: "#909C0E"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#82BBC8"
				},
				{
					locked: false,
					color: "#82BBC8"
				},
				{	locked: false,
					color: "#909C0E"
				}
			],
				project: [
					{	name: 'project one',
						id: 1
					}
				]
			}

			const expected = { 
				projects: [
				{	name: 'project one',
					id: 1
				}
			]
		}
		
		const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected)
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch when using setProjects', () => {

			const mockProject = {
				name: 'project one',
				id: 1
			};
			const mockProjects = [
				{
					name: 'project one',
					id: 1
				},
				{
					name: 'project two',
					id: 2
				}
			]

			const mockDispatch = jest.fn()

			const actionToDispatch = setProjects(mockProjects)

			const mappedProps = mapDispatchToProps(mockDispatch);

			mappedProps.setProjects(mockProjects)

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

		});
	});
});


