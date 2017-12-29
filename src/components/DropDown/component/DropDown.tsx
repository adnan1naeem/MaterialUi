import React from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import  {IPicker} from '@blueeast/bluerain-ui-interfaces/Components/Picker';

// const DropDownItems=(items)=>{
//     console.log('items ',items);
//     items.map((item)=>
//         (
//             <MenuItem value={item.value}>{item.label}</MenuItem>
//         )
//     );
// };
const DropDown = (iPicker:IPicker) => {

    const props = iPicker ? iPicker :[];
    return (
        <Select
            {...props}
        >
            {iPicker.items.map((item)=>
                (
                    <MenuItem style={{width:400}} value={item.value}>{item.label}</MenuItem>
                )
            )}{iPicker.children}</Select>);


};

export default DropDown;

