import * as React from 'react';
import { TextInput } from '../';
import { storiesOf } from '@storybook/react';

function handleTextInputChange(value: any) {
    console.log('text input value', value.target.value);
}

const labelProps = {
    shrink: true,
    background: 'red'
};
const textFieldClasses = 'margin-left: 100px; margin-right: 100px; width: 50px; background-color: red; padding:100px;';

storiesOf('TextInput', module).add('with placeholder, default value, onChange, autoComplete, autoFocus',
    () => <TextInput label="haris" placeholder="hello" onChange={handleTextInputChange} autoComplete="Hello World !!" autoFocus={true} />);

storiesOf('TextInput', module).add('with id, label, className, onChange, margin',
    () => <TextInput id="name" label="Name" className={textFieldClasses} onChange={handleTextInputChange} margin="dense" />);

storiesOf('TextInput', module).add('with required',
    () => <TextInput required={true} id="required" label="Required" defaultValue="Hello World" className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with error true and errorText props',
    () => <TextInput error={true} id="error" label="Error" defaultValue="Hello World" className={textFieldClasses} margin="normal" errorText={'Oh Noes, Error!!!'} />);

storiesOf('TextInput', module).add('with type password',
    () => <TextInput id="password" label="Password" className={textFieldClasses} secureTextEntry={true} autoComplete="current-password" margin="normal" />);


storiesOf('TextInput', module).add('with multiline flexible',
    () => <TextInput id="multiline-flexible" label="Multiline" multiline={true} rowsMax="4" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with multiline static',
    () => <TextInput id="multiline-flexible" variant={'outlined'} multiline={true} numberOfLines={4} onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with HelperText',
    () => <TextInput id="multiline-flexible" label="Helper Text" helperText="Some important text" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with HelperText with node',
    () => <TextInput id="multiline-flexible" label="Helper Text" helperText={<h1>Node Text</h1>} onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with placeholder multiline',
    () => <TextInput id="multiline-flexible" v label="With place holder multiline" placeholder="Placeholder" multiline={true} onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('editable = false',
    () => <TextInput id="multiline-flexible" editable={false} label="With place holder multiline" placeholder="Placeholder" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);
storiesOf('TextInput', module).add('with fullWidth',
    () => <TextInput id="multiline-flexible" fullWidth={true} editable={true} label="Full Width" placeholder="Placeholder" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with style object',
    () => <TextInput id="multiline-flexible" style={labelProps} variant="outlined" editable={true} label="Full Width" placeholder="Placeholder" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with type date',
    () => <TextInput id="multiline-flexible" style={labelProps} editable={true} placeholder="Placeholder" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);

storiesOf('TextInput', module).add('with type d]]ate',
    () => <TextInput id="multiline-flexible" style={labelProps} type="date" editable={true} label="Full Width" placeholder="Placeholder" onChange={handleTextInputChange} className={textFieldClasses} margin="normal" />);
// storiesOf('textInput', module).add('with type number',
//     () =>  <form ><textInput id="number" value={'4'} type="number" InputLabelProps={labelProps} label="Number" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);

// storiesOf('textInput', module).add('with type search',
//     () =>  <form ><textInput id="search" type="search" label="Search" placeholder="Placeholder" multiline onChange={handleTextInputChange} className={textFieldClasses} margin="normal" /></form>);




