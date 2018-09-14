import React from 'react';
import  Adapter from 'enzyme-adapter-react-16';
import  renderer  from 'react-test-renderer';
import Checkbox from '../';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });

test('when title prop is passed', () => {
    const checkbox = shallow(
        <Checkbox label="hello" />
    );
    expect(checkbox.props().label).toBeUndefined();
});
test('when checked prop is passed', () => {
    const checkbox = shallow(
        <Checkbox checked={false} />
    );
    expect(checkbox.props().checked).toBeFalsy();
    expect(checkbox).toMatchSnapshot();
});
