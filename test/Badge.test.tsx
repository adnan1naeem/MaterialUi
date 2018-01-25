import * as React from 'react';
import { create } from 'react-test-renderer';
import Badge from '../src/components/Badge';

test('Badge component with required fields', () => {
  const badge = create(
      <Badge badgeContent={'123'}></Badge>
  ).toJSON();
  expect(badge.props.style).toEqual(undefined);
  expect(badge).toMatchSnapshot();
});

test('Badge component with style', () => {
  const badge = create(
      <Badge badgeContent={'123'} style={{ 'background-color':'green' }}></Badge>
  ).toJSON();
  expect(badge.props.style).toEqual({ 'background-color':'green' });
	expect(badge).toMatchSnapshot();
});