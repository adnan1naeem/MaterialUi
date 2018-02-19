import React from 'react';
import { create } from 'react-test-renderer';
import Chip from '../src/components/Chip';

test('Chip component with default values', () => {
	const chip = create(
      <Chip>10 % off</Chip>
  ).toJSON();
	expect(chip.props.style).toEqual(undefined);
	expect(chip).toMatchSnapshot();
});

test('Chip component with style', () => {
	const chip = create(
      <Chip style={{ 'background-color':'green' }}>10 % off</Chip>
  ).toJSON();
	expect(chip.props.style).toEqual({ 'background-color':'green' });
	expect(chip).toMatchSnapshot();
});
