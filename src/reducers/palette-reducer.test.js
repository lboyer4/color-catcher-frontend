import makePalette from './palette-reducer';
import * as actions from '../actions';

describe('palette', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = makePalette(undefined, [])

    expect(result).toEqual(expected)
  })
})