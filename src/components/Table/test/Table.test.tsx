
import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from '../';
import Adapter from 'enzyme-adapter-react-16';

import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });
import 'jest';

test('Table component with children props', () => {
  const table = shallow(
    <Table >child</Table>
  );
  expect(table.props().children).toBeDefined();
});
