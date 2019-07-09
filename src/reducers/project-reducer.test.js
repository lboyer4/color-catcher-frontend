import * as actions from '../actions';
import project from './project-reducer';

describe('project', () => {
  it('should return initial state', () => {
    const expected = {};

    const result = project(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return the state with all projects', () => {
    const projects = [
      {
      name: "Project 1"
    },
    {
      name: "Project 2"
    }
  ]
    const expected = projects


  const result = project(undefined, actions.setProjects(projects))

  expect(result).toEqual(expected)
  });

  it('should return state with new project', () => {
    const mockProject = [{ name: "Project 3" }]
    
    const expected = mockProject

    const result = project(undefined, actions.addProject(mockProject))

    expect(result[0]).toEqual(expected)
  });

  it('should delete a project', () => {
    const mockProject = [
      {
      name: "Project 12" ,
      id: 10 
    },
    {
      name: "Project 17" ,
      id: 13 
    }
  ]

  const expected = [
    {
      name: "Project 12",
      id: 10
    }
  ]

    const result = project(mockProject, actions.deleteProject(13))

    expect(result).toEqual(expected)
  })
})