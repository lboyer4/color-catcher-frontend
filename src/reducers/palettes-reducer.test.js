import * as actions from '../actions';
import palettes from './palettes-reducer';

describe('palettes', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = palettes(undefined, [])

    expect(result).toEqual(expected)
  });

  it('should return the state with set palettes', () => {
    const expected = [{
      color: "00FF00"
    }, 
    {
      color: "00FF00"
    }]

    const result = palettes(undefined, actions.setPalettes(expected))

    expect(result).toEqual(expected)
  });

  it('should return the state with an added palette', () => {
    const expected = 
      [{
      color: "5B232E"
    }]

  const result = palettes(undefined, actions.addPalette(expected[0]))

  expect(result).toEqual(expected)
  });

  it('should return the state with single deleted palette from project', () => {
    const mockPalette = [
    {
        "id": 62,
        "name": "new",
        "color_1": "6ACE3D",
        "color_2": "7E394E",
        "color_3": "CCA80A",
        "color_4": "5B232E",
        "color_5": "DFC8C0",
        "project_id": 26
      },
      {
        "id": 63,
        "name": "new",
        "color_1": "6ACE3D",
        "color_2": "7E394E",
        "color_3": "CCA80A",
        "color_4": "5B232E",
        "color_5": "DFC8C0",
        "project_id": 26
      }
    ]

    const expected = [{
        "id": 62,
        "name": "new",
        "color_1": "6ACE3D",
        "color_2": "7E394E",
        "color_3": "CCA80A",
        "color_4": "5B232E",
        "color_5": "DFC8C0",
        "project_id": 26
      }]
    
    const result = palettes(mockPalette, actions.deletePalette(63))

    expect(result).toEqual(expected)
  })
})