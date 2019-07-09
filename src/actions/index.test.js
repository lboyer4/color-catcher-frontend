import * as actions from './index';

describe('actions', () => {
  it('should return palette with a type of MAKE_PALETTE', () => {
    const palette = [{
      color: "#35A3D9"
    }];
    const expected = {
      type: 'MAKE_PALETTE',
      palette
    };
    const result = actions.makePalette(palette);

    expect(result).toEqual(expected)
  });

  it('should return projects with a type of SET_PROJECTS', () => {
    const projects = [{
      name: "Project 1"
    }];

    const expected = {
      type: 'SET_PROJECTS',
      projects
    };
    const result = actions.setProjects(projects);

    expect(result).toEqual(expected)
  });

  it('should return single project with a type of ADD_PROJECT', () => {
    const project = {
      name: "Project 2"
    }

    const expected = {
      type: 'ADD_PROJECT',
      project
    }
    const result = actions.addProject(project);

    expect(result).toEqual(expected)
  });

  it('should return id with a type of DELETE_PROJECT', () => {
    const id = {
      id: 9
    }

    const expected = {
      type: 'DELETE_PROJECT',
      id
    }
    const result = actions.deleteProject(id);

    expect(result).toEqual(expected)
  })
})