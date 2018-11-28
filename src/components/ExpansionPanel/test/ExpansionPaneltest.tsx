import { ExpansionPanelComponent } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
test('render correctly', () => {
	const Steppertest = renderer.create(

		<ExpansionPanelComponent children={null} title={'brand'} />
	).toJSON();
	expect(Steppertest).toBeDefined();
	expect(Steppertest).toMatchSnapshot();
});