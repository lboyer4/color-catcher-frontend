import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow( <App />);
		expect(wrapper).toMatchSnapshot();
	});
});