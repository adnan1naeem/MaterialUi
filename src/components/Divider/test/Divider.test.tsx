import 'jest';
import Divider from '../Divider.component';
import React from 'react';
import { shallow, configure } from 'enzyme'; import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Divider component with light value props', () => {
  const divider = shallow(
    <Divider light={true} />
  );
  expect(divider.props().light).toEqual(true);
});

test('Divider component with absolute  prop=true', () => {
  const divider = shallow(
    <Divider absolute={true} />
  );
  expect(divider.props().absolute).toEqual(true);
});


test('Divider component with inset prop=true', () => {
  const divider = shallow(
    <Divider inset={true} />
  );
  expect(divider.props().inset).toEqual(true);
});

test('Divider component with inset prop=false', () => {
  const divider = shallow(
    <Divider inset={false} />
  );
  expect(divider.props().inset).toEqual(false);
});



test('Divider component with inset prop=false', () => {
  const divider = shallow(
    <Divider classes={{}} />
  );
  expect(divider.props().classes).toEqual({});
});


