import { Divider } from '../src/components/Divider';
import { create } from 'react-test-renderer';
import React from 'react';

test('Divider component with default values', () => {
	const divider = create(
      <Divider />
  ).toJSON();
	expect(divider.props.light).toEqual(undefined);
	expect(divider).toMatchSnapshot();
});

test('Divider component with style', () => {
	const divider = create(
        <Divider absolute={true}/>
  ).toJSON();
	expect(divider.props.absolute).toEqual(undefined);
	expect(divider).toMatchSnapshot();
});
