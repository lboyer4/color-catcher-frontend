import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { makePalette } from '../../actions';

describe('Header', () => {
	let wrapper;
	let mockMakePalette;

	beforeEach(() => {
		mockMakePalette = jest.fn();

		wrapper = shallow(
			<Header
				makePalette={mockMakePalette}
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
})