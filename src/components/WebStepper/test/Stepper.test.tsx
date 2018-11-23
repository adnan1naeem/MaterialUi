import { WebStepper } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
test('render correctly', () => {
	const Steppertest = renderer.create(
		<WebStepper type="progress" activeStep={3} steps={[{label: 6}]} />
	).toJSON();
	expect(Steppertest).toBeDefined();
	expect(Steppertest).toMatchSnapshot();
});