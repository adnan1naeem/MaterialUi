import React from 'react';
import { create } from 'react-test-renderer';
import {DropDown, DropdownItem} from '../src/components/DropDown/DropDown';

test('it should show normal dropDown', () => {
    const DropDown = create(
        <DropDown  value={'xyz'}  >
            <DropdownItem value="xyz">Item 1 </DropdownItem>
            <DropdownItem value="abc">Item 2 </DropdownItem>
            <DropdownItem value="abc">Item 3 </DropdownItem>
            <DropdownItem value="abc">Item 4 </DropdownItem>
            <DropdownItem value="abc">Item 5 </DropdownItem>
        </DropDown>
    ).toJSON();
    console.log('DropDown.props', DropDown.props);
    // expect(DropDown.props.autoWidth).toEqual(false);
    // expect(DropDown).toMatchSnapshot();
});

// test('Chip component with style', () => {
//     const chip = create(
//         <Chip style={{'background-color':'green'}}>10 % off</Chip>
//     ).toJSON();
//     expect(chip.props.style).toEqual({'background-color':'green'});
//     expect(chip).toMatchSnapshot();
// });