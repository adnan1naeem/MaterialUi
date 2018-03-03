import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from '../src/components/Checkbox';

test('when title prop is passed', () => {
    const checkbox = create(
        <Checkbox label="hello" />
    ).toJSON();
    expect(checkbox.props.label).toEqual('hello');
    expect(checkbox).toMatchSnapshot();
});
test('when checked prop is passed', () => {
    const checkbox = create(
        <Checkbox checked={true} />
    ).toJSON();
    expect(checkbox.props.checked).toEqual(true);
    expect(checkbox).toMatchSnapshot();
});
