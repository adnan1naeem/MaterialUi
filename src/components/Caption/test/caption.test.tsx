import 'jest';
import  Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Caption from '../Caption.component';

configure({ adapter: new Adapter() });

test('renders correctly with style prop ', () => {
    const wrapper = shallow(<Caption style={{ color: 'blue' }} />);
    expect(wrapper.props().style.color).toBe('blue');
  });