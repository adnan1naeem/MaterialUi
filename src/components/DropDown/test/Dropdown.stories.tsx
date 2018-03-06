import { Dropdown, DropdownItem } from '../index';
import Input, { InputLabel } from 'material-ui/Input';
import { storiesOf } from '@storybook/react';
import Paper from 'material-ui/Paper';
import React from 'react';

const stories = storiesOf('Dropdown', module);

const onChange =(event) => {
	const value=event.target.value;
};
const style={ root:{ padding:20 }, dropdown:{ width:400 } };
const multiItems=[
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder'
];

stories.add('Dropdown', () => {
	return(
		<Paper style={style.root}>
				<Dropdown onValueChange={onChange} value={'xyz'}  style={style.dropdown}>
					<DropdownItem value="xyz">Item 1 </DropdownItem>
						<DropdownItem value="abc">Item 2 </DropdownItem>
						<DropdownItem value="abc">Item 3 </DropdownItem>
						<DropdownItem value="abc">Item 4 </DropdownItem>
						<DropdownItem value="abc">Item 5 </DropdownItem>
				</Dropdown>
		</Paper>);}
);

stories.add('Dropdown with autoWidth', () => {
	return(
		<Paper style={style.root}>
			<Dropdown onValueChange={onChange} value={'xyz'} autoWidth={true}  style={style.dropdown}>
				<DropdownItem value="xyz">Item 1 </DropdownItem>
				<DropdownItem value="abc">Item 2 </DropdownItem>
				<DropdownItem value="abc">Item 3 </DropdownItem>
				<DropdownItem value="abc">Item 4 </DropdownItem>
				<DropdownItem value="abc">Item 5 </DropdownItem>
			</Dropdown>
	</Paper>);}
);

stories.add('Dropdown with Override styles', () => {
	return(
		<Paper style={style.root}>
			<Dropdown onValueChange={onChange} value={'xyz'} style={{ width:600, backgroundColor:'green' }} itemStyle={{ backgroundColor:'black' }}>
				<DropdownItem value="xyz">Item 1 </DropdownItem>
				<DropdownItem value="abc">Item 2 </DropdownItem>
				<DropdownItem value="abc">Item 3 </DropdownItem>
				<DropdownItem value="abc">Item 4 </DropdownItem>
				<DropdownItem value="abc">Item 5 </DropdownItem>
			</Dropdown>
		</Paper>);}
);

stories.add('Dropdown multiple select', () => {
	return(
		<Paper style={style.root}>
			<Dropdown onValueChange={onChange} value={multiItems} autoWidth={true} multiple style={style.dropdown} >
				<DropdownItem value="xyz">Item 1 </DropdownItem>
				<DropdownItem value="abc">Item 2 </DropdownItem>
				<DropdownItem value="abc">Item 3 </DropdownItem>
				<DropdownItem value="abc">Item 4 </DropdownItem>
				<DropdownItem value="abc">Item 5 </DropdownItem>
			</Dropdown>
		</Paper>);}
);

stories.add('Dropdown with disabled', () => {
	return(
		<Paper style={style.root}>
			<Dropdown onValueChange={onChange} value={'xyz'}  input={<Input id="name-native-disabled" />} style={style.dropdown} displayEmpty>
				<DropdownItem value="xyz">Item 1 </DropdownItem>
				<DropdownItem disabled value="abc">Item 2</DropdownItem>
				<DropdownItem disabled value="abc">Item 3 </DropdownItem>
				<DropdownItem value="abc">Item 4 </DropdownItem>
				<DropdownItem value="abc">Item 5 </DropdownItem>
			</Dropdown>
	</Paper>);}
);