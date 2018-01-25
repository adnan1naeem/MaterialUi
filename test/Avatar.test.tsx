import * as React from 'react';
import { create } from 'react-test-renderer';
import Avatar from '../src/components/Avatar';

test('Avatar component with required fields', () => {
	const avatar = create(
      <Avatar size={100}></Avatar>
  ).toJSON();
	expect(Avatar.props.size).toEqual(100);
	expect(Avatar).toMatchSnapshot();
});

test('Badge component with style', () => {
	const avatar = create(
      <Avatar style={{ 'background-color':'green' }}></Avatar>
  ).toJSON();
	expect(Avatar.props.style).toEqual({ 'background-color':'green' });
	expect(Avatar).toMatchSnapshot();
});