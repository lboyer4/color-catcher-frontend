import * as actions from '../actions';
import projects from './projects-reducer';

describe('projects', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = projects(undefined, []);

    expect(result).toEqual(expected)
  });
})