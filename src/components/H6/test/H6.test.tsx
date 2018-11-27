import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { configure, shallow } from 'enzyme';
import H6 from '../H6.component';

configure({ adapter: new Adapter() });

test('renders correctly with style prop ', () => {
  const wrapper = shallow(<H6 style={{ color: 'blue' }} />);
  expect(wrapper.props().style.color).toBe('blue');
});