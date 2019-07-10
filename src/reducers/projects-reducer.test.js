import * as actions from '../actions';
import projects from './projects-reducer';

describe('projects', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = projects(undefined, []);

    expect(result).toEqual(expected)
  });

  it('should return the state with set projects', () => {
    const expected = [
      {
      name: "Project one"
    },
    {
      name: "Project two"
    }
  ]

  const result = projects(undefined, actions.setProjects(expected))

  expect(result).toEqual(expected)
  });

  it('should return the state with project added', () => {
    const expected = [{
      name: "Project three"
    }]

    const result = projects(undefined, actions.addProject(expected[0]))

    expect(result).toEqual(expected)
  });

  it('should return the state with project deleted id ids do not match', () => {
    const mockProject = [
    {
      name: "Project four",
      id: 25
    },
    {
      name: "Project five",
      id: 26
    }
  ]

  const expected = [{
    name: "Project four",
    id: 25
  }]

  const result = projects(mockProject, actions.deleteProject(26))

  expect(result).toEqual(expected)
  })
})