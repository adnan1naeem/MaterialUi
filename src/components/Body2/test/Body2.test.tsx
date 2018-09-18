import 'jest';
import  Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Body2 from '../Body2.component';

configure({ adapter: new Adapter() });

test('renders correctly with style prop ', () => {
    const wrapper = shallow(<Body2 style={{ color: 'blue' }} />);
    expect(wrapper.props().style.color).toBe('blue');
  });