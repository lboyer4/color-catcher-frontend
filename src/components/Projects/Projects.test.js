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

	describe('handleChange', () => {
		it('should set state with title', () => {

			const mockTitleEvent = {
				target: {
					value: 'Project One'
				}
			};

			const wrapper = shallow(
				<Projects 
					projects={mockProjects}
				/>
			);

			wrapper.instance().handleChange(mockTitleEvent);
			expect(wrapper.state().title).toEqual('Project One');
		});
	}); 

	describe('makeProject', () => {
		it('should call post project', () => {
			const mockMakeProjectEvent = {
				preventDefault: () => {}
			};

			wrapper.instance().postProject = jest.fn();
			wrapper.instance().makeProject(mockMakeProjectEvent);

			expect(wrapper.instance().postProject).toHaveBeenCalled();
			expect(wrapper.state().title).toEqual('');
		});
	});

	describe('deleteProject', () => {
		it.skip('should call deleteProject', () => {
			const mockTitleEvent = {
				target: {
					getAttribute: () => {
						return 1 }
				}
			};
			
			wrapper.instance().deleteProject(mockTitleEvent)
			expect(wrapper.instance().props.deleteProject).toHaveBeenCalledWith(1)
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch when using setProjects', () => {

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

		it('should call dispatch when using addProject', () => {

			const mockProject = {
				name: 'project one',
				id: 1
			};

			const mockDispatch =jest.fn();

			const actionToDispatch = addProject(mockProject);

			const mappedProps = mapDispatchToProps(mockDispatch);

			mappedProps.addProject(mockProject);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});

		it('should call dispatch when using deleteProject', () => {

			const mockId = 1;

			const mockDispatch = jest.fn();

			const actionToDispatch = deleteProject(mockId);

			const mappedProps = mapDispatchToProps(mockDispatch);

			mappedProps.deleteProject(mockId);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});



