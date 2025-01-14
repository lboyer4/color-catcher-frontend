import palette from './palette-reducer';
import * as actions from '../actions';

describe('palette', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = palette(undefined, [])

    expect(result).toEqual(expected)
  });

  it('should return the state with a new palette',  () => {
    const expected = [
      { locked: false,
        color: "#816379"
      },
      { locked: false,
        color: "#816379"
      },
      { locked: false,
        color: "#816379"
      },
      { locked: false,
        color: "#816379"
      },
      { locked: false,
        color: "#816379"
      }
    ];

    const result = palette(undefined, actions.makePalette(expected))

    expect(result).toEqual(expected)
  });
})