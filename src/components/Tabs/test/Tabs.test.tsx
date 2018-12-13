
import React from 'react';
import { Tabs } from '../';
import Adapter from 'enzyme-adapter-react-16';

import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });
import 'jest';

test('Tabs component with children props', () => {
  const table = shallow(
    <Tabs value={1} >child</Tabs>
  );
  expect(table.props().children).toBeDefined();
});
