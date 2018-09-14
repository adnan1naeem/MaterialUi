import 'jest';
import   Adapter from 'enzyme-adapter-react-16';
import  React from 'react';
import  renderer from 'react-test-renderer';
import { configure, mount, shallow, } from 'enzyme';
import { Drawer } from '../../Drawer';
import { Button } from '../../Button';
configure({ adapter: new Adapter() });

test('It should return true when drawer is close. ', () => {
    const wrapper = shallow(<Drawer anchor="right" open={false} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
});
test('It should render overlay type drawer . ', () => {
    const wrapper = shallow(<Drawer anchor="right" open={false} />);
    expect(wrapper).toBeDefined();
});