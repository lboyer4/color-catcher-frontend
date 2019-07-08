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
})