import React from 'react';
import  Adapter from 'enzyme-adapter-react-16';
import  renderer  from 'react-test-renderer';
import { Checkbox } from '../';
import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });

test('when title prop is passed', () => {
    const checkbox = shallow(
        <Checkbox label="hello" />
    );
    expect(checkbox.props().label).toBeUndefined();
});
test('when value prop is passed false', () => {
    const checkbox = shallow(
        <Checkbox value={false} />
    );
    expect(checkbox.props().value).toBeFalsy();
    expect(checkbox).toMatchSnapshot();
});
test('when indeterminate prop is passed true', () => {
    const checkbox = shallow(
        <Checkbox indeterminate={false} />
    );
    expect(checkbox.props().indeterminate).toBeFalsy();
    expect(checkbox).toMatchSnapshot();
});
// test('when checked prop is passed', () => {
//     const checkbox = shallow(
//         <Checkbox value={false} />
//     );
//     expect(checkbox.props().value).toBeFalsy();
//     expect(checkbox).toMatchSnapshot();
// });