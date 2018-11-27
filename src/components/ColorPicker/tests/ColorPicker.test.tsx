import { ColorPicker } from '../';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });


test('ColorPicker with hs true', () => {
  const wrapper = shallow(
    <ColorPicker hs={false} value={{ h: 120, s: 1, l: 0.5 }} />
  );
  expect(wrapper.props().hs).toBeFalsy();
});
