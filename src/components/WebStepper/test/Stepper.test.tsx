import { WebStepper } from '../Stepper.components';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';

test('render correctly', () => {
	const wrapper = mount(
		<WebStepper type="progress" activeStep={3} steps={['label']} />
	);
	expect(wrapper.props().type).toEqual('progress');
});