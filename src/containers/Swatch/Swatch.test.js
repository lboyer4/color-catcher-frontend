import React from 'react';
import { shallow } from 'enzyme';
import { Swatch, mapStateToProps, mapDispatchToProps } from './Swatch';
import { makePalette } from '../../actions';

describe('Swatch', () => {
	let wrapper;
	let mockPalette;
	let mockMakePalette;

	beforeEach(() => {
		mockMakePalette = jest.fn();
		mockPalette = [
			{	locked: false,
				color: "#909C0E"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#82BBC8"
			},
			{
				locked: false,
				color: "#82BBC8"
			},
			{	locked: false,
				color: "#909C0E"
			}
		]

		wrapper = shallow(
			<Swatch 
				makePalette={mockMakePalette}
				palette={mockPalette}
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

})