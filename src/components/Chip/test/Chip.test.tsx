import { Chip } from '../';
import renderer from 'react-test-renderer';
import React from 'react';
import 'jest';
import console = require('console');

test('Chip component with default values', () => {
  const chip = renderer.create(
    <Chip label={'10 % off'}>
    </Chip>
  ).toJSON();
  console.log('Chip', chip);
  expect(chip ? chip.props.style : null).toEqual(undefined);
  expect(chip).toMatchSnapshot();
});

test('Chip component with style', () => {
  const chip = renderer.create(
    <Chip style={{ 'background-color': 'green' }} label={'10 % off'}>
    </Chip>
  ).toJSON();
  expect(chip ? chip.props.style : null).toEqual({ 'background-color': 'green' });
  expect(chip).toMatchSnapshot();
});
