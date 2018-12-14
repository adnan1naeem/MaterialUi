import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { WebStepper } from '../WebStepper.components';

configure({ adapter: new Adapter() });


test('render correctly', () => {
	const wrapper = mount(
		<WebStepper type="progress" activeStep={3} steps={['label']} />
	);
	expect(wrapper.props().type).toEqual('progress');
});