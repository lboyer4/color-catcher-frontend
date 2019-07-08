import * as actions from '../actions';
import project from './project-reducer';

describe('project', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = project(undefined, [])

    expect(result).toEqual(expected)
  })
})