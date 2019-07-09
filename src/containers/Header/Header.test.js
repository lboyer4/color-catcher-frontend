import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { makePalette } from '../../actions';

describe('Header', () => {
	let wrapper;
	let mockMakePalette;
	let mockPalette;

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
			<Header
				makePalette={mockMakePalette}
				palette={mockPalette}
			/>
		);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should handleClick', () => {
	
		const mockOldColors = [
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
			<Header 
				makePalette={mockMakePalette}
				palette={mockOldColors}
			/>)

		wrapper.instance().generateColors = jest.fn()
		wrapper.instance().handleClick();
		expect(wrapper.instance().generateColors).toHaveBeenCalled()
	})

	describe('generateColors', () => {
		it('should call generateHex if there is not 5 old colors', () => {

			wrapper.instance().generateHex = jest.fn()

			wrapper.instance().generateColors();
			expect(wrapper.instance().generateHex).toHaveBeenCalled()
			expect(wrapper.instance().props.makePalette).toHaveBeenCalled()
		});

		it('should call make makePalette with new colors', () => {

			const mockNewColors = [

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
			<Header 
				makePalette={mockMakePalette}
				palette={mockNewColors}
			/>
		)

		wrapper.instance().generateColors()

		});
	});

	describe('mapStateToProps', () => {
		it('should return an array of objects', () => {
			const mockState = {
					palette: [
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
			],
				project: []
		}

			const expected = {
				palette: [
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
	}

		const mappedProps = mapStateToProps(mockState);

		expect(mappedProps).toEqual(expected);
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch when using makePalette', () => {
			const mockPalette = [
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
		
		const mockDispatch = jest.fn();

		const actionToDispatch = makePalette(mockPalette);
		const mappedProps = mapDispatchToProps(mockDispatch);

		mappedProps.makePalette(mockPalette)

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		});
	});
});