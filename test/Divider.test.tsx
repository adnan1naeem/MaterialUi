import { create } from 'react-test-renderer';
import Divider from '../src/components/Divider';
import React from 'react';

test('Divider component with default values', () => {
	const divider = create(
      <Divider />
  ).toJSON();
	expect(divider.props.light).toEqual(false);
	expect(divider).toMatchSnapshot();
});

test('Divider component with style', () => {
	const divider = create(
        <Divider absolute={true}/>
  ).toJSON();
	expect(divider.props.absolute).toEqual(true);
	expect(divider).toMatchSnapshot();
});
