import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import { Drawer } from '../../Drawer';
import 'jest';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });

test('It should return true when drawer is bottom. ', () => {
    const wrapper = shallow(<Drawer anchor="bottom" open={false} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
});

test('It should return bottom when drawer is bottom. ', () => {
    const wrapper = shallow(<Drawer anchor="bottom" open={false} />);
    expect(wrapper.props().anchor).toBe('bottom');
    expect(wrapper).toMatchSnapshot();
});
test('It should return false when drawer is open. ', () => {
    const wrapper = shallow(<Drawer anchor="bottom" open={false} />);
    expect(wrapper.props().open).toBe(false);
    expect(wrapper).toMatchSnapshot();
});
test('It should return true when drawer is open. ', () => {
    const wrapper = shallow(<Drawer anchor="bottom" open={true} />);
    expect(wrapper.props().open).toBe(true);
    expect(wrapper).toMatchSnapshot();
});
test('It should render anchor type right . ', () => {
    const wrapper = shallow(<Drawer anchor="right" open={false} />);
    expect(wrapper.props().anchor).toBe('right');
    expect(wrapper).toMatchSnapshot();
});
test('It should render anchor type top . ', () => {
    const wrapper = shallow(<Drawer anchor="top" open={false} />);
    expect(wrapper.props().anchor).toBe('top');
    expect(wrapper).toMatchSnapshot();
});
test('It should render anchor type left . ', () => {
    const wrapper = shallow(<Drawer anchor="left" open={false} />);
    expect(wrapper.props().anchor).toBe('left');
    expect(wrapper).toMatchSnapshot();
});