import { Stepper } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
test('render correctly', () => {
	const Steppertest = renderer.create(
    <Stepper  type="progress" activeStep={3} steps={6}   />
	).toJSON();
	expect(Steppertest).toBeDefined();
	expect(Steppertest).toMatchSnapshot();
});