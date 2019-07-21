import React from 'react';
import { shallow } from 'enzyme';
import { Palettes, mapStateToProps, mapDispatchToProps } from './Palettes';
import { addPalette, deletePalette } from '../../actions';

describe('Palettes', () => {
	let wrapper;
	let mockProject;
	let mockPalette;
	let mockPalettes;
	let mockAddPalette;
	let mockDeletePalette;

	beforeEach(() => {
		mockAddPalette = jest.fn();
		mockDeletePalette = jest.fn();
		mockProject = {id: 29, name: "project"};
		let mockPalette = [
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			}
		];
		mockPalettes = [
		{	color_1: "CF71BD",
			color_2: "D09B24",
			color_3: "0C2A28",
			color_4: "CC3EDC",
			color_5: "816379",
			name: "hi there",
			project_id: 30,
			id: 40},
		{	color_1: "CF71BB",
			color_2: "D09B22",
			color_3: "002A28",
			color_4: "CC3EDC",
			color_5: "886379",
			name: "bye there",
			project_id: 31,
			id: 41}
		];


		wrapper = shallow(
			<Palettes 
				addPalette={mockAddPalette}
				deletePalette={mockDeletePalette}
				project={mockProject}
				palette={mockPalette}
				palettes={mockPalettes}
			/>
		)
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('handleChange', () => {
		it('should handle the change of name', () => {
			const mockNameEvent = {
				target: {
					value: 'Palette One'
				}
			};

			wrapper.instance().handleChange(mockNameEvent);
			expect(wrapper.state().name).toEqual('Palette One')
		});
	});

	describe('addPalette', () => {
		it('should call post palette', () => {
			const newPalette = {	
				color_1: "CF71BD",
				color_2: "D09B24",
				color_3: "0C2A28",
				color_4: "CC3EDC",
				color_5: "816379",
				name: "hi there",
				project_id: 30,
				id: 40
			}
			wrapper.instance().postPalette = jest.fn();
			wrapper.instance().addPalette();
			expect(wrapper.instance().postPalette).toHaveBeenCalled();
		});
	});

	describe('postPalette', () => {
		it.skip('should have a post fetch', () => {

		});
	});

	describe('deletePalette', () => {
		it.skip('should call a delete fetch', () => {

  
			})

		});
		it('should dispatch a delete palette action', () => {

			const paletteIdToDelete = 1;
			wrapper.instance().deletePalette = jest.fn();

			wrapper.instance().deletePalette = jest.fn()
			wrapper.instance().deletePalette()
			expect(wrapper.instance().deletePalette).toHaveBeenCalled()
		});
	

	describe('mapStateToProps', () => {
		it('should return a project object', () => {
			const mockState = {
				project: {
							name: "project one",
							id: 1
						},
				palette: [
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			}
		],
		palettes: [
		{	color_1: "CF71BD",
			color_2: "D09B24",
			color_3: "0C2A28",
			color_4: "CC3EDC",
			color_5: "816379",
			name: "hi there",
			project_id: 30,
			id: 40},
		{	color_1: "CF71BB",
			color_2: "D09B22",
			color_3: "002A28",
			color_4: "CC3EDC",
			color_5: "886379",
			name: "bye there",
			project_id: 31,
			id: 41}
		]
			}
				
			const expected = {
				project: {
							name: "project one",
							id: 1
						},
				palette: [
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			}
		],
		palettes: [
		{	color_1: "CF71BD",
			color_2: "D09B24",
			color_3: "0C2A28",
			color_4: "CC3EDC",
			color_5: "816379",
			name: "hi there",
			project_id: 30,
			id: 40},
		{	color_1: "CF71BB",
			color_2: "D09B22",
			color_3: "002A28",
			color_4: "CC3EDC",
			color_5: "886379",
			name: "bye there",
			project_id: 31,
			id: 41}
		]
			}

			const mappedProps = mapStateToProps(mockState)


			expect(mappedProps).toEqual(mockState)
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch of addPalette', () => {
			const mockPalette = [
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			}
		]
			const mockDispatch = jest.fn();
			const actionToDispatch = addPalette(mockPalette);

			const mappedProps = mapDispatchToProps(mockDispatch)

			mappedProps.addPalette(mockPalette)
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		});
		

		it('should call dispatch of deletePalette', () => {
			const mockId = 1
		const mockDispatch = jest.fn();
		const actionToDispatch = deletePalette(mockId);

		const mappedProps = mapDispatchToProps(mockDispatch)

		mappedProps.deletePalette(mockId)

		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		});
	});
});