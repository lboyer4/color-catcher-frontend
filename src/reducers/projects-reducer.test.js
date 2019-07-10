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

})