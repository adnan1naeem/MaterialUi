import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../';
import 'jest';

import { configure, mount, shallow, } from 'enzyme';
configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const tree = shallow(<Button muiVariant="outlined" style={{ marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' }} />);
    expect(tree).toMatchSnapshot();
});
test('if Button renders correctly ', () => {
    const wrapper = shallow(<Button title="button title" />);
    expect(wrapper).toBeDefined();
});
test('Dark Button with label in Child should have child count > 0 ', () => {
    const wrapper = shallow(<Button style={{ marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' }} >Dark </Button>);
    expect(wrapper.props().children.props.children).toBeDefined();
});
test('Secondary Button with style prop should be rendered correctly', () => {
    const wrapper = shallow(<Button style={{ marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' }} >Custom</Button>);
    expect(wrapper.props().children.props.style).toEqual({ marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' });
});

test(' Warning Button with disabled prop true should properly render', () => {
    const wrapper = shallow(<Button muiVariant="contained" disabled={true} style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }}> Disabled</Button>);
    expect(wrapper.props().children.props.disabled).toBeTruthy();
});

test(' Danger Button with onPress prop', () => {
    const wrapper = shallow(<Button muiVariant="contained" fullWidth={true} style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }}>FullWidth</Button>);
    expect(wrapper).toBeDefined();
});
test('Success Button with variant prop', () => {
    const wrapper = shallow(<Button variant="flat" muiVariant="contained" style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }} active={true}>Active</Button>);
    expect(wrapper.props().children.props.variant).toBe('flat');
});
test(' Default Button with size prop', () => {
    const wrapper = shallow(<Button size="small" style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }}> Bordered</Button>);
    expect(wrapper.props().children.props.size).toBeDefined();
});
// test('Rounded Button should properly render', () => {
//     const wrapper = shallow(<Button rounded={false} style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }}>rounded</Button>);
//     expect(wrapper.props().rounded).toBeFalsy();
// });

// test('Button with fab prop small false', () => {
//     const wrapper = shallow(<Button block={true} transparent={true} style={{ marginLeft: 150, display: 'flex', justifyContent: 'center', }}>Transparent</Button>);
//     expect(wrapper.props().transparent).toEqual(true);
// });

// // // import { Button } from '../';
// // // import { ButtonProperties } from '@blueeast/bluerain-ui-interfaces';
// // // import renderer  from 'react-test-renderer';
// // // import React from 'react';

// // // // test('Button with fab true', () => {
// // // // 	const button = renderer.create(
// // // //       <Button fab={true}></Button>
// // // //   ).toJSON();
// // // // 	console.log(button);
// // // // 	expect(button.props.className).toEqual('MuiButtonBase-root-16 MuiButton-root-1 MuiButton-raised-8 MuiButton-fab-14');
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // test('Button component with style',{disableLifecycleMethods: true}, () => {
// // // 	const button = renderer.create(
// // //       <Button style={{ backgroundColor:'green' }}></Button>
// // //   ).toJSON();
// // // 	expect(button.props.style).toEqual({ backgroundColor:'green' });
// // // 	expect(button).toMatchSnapshot();
// // // });

// // // // test('Button component with color accent', () => {
// // // // 	const button = create(
// // // //       <Button color="accent"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with onClick', () => {
// // // // 	const button = create(
// // // //       <Button onPress={console.log('Heelloo')}></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.onClick).toEqual(console.log('Heelloo'));
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true}></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.iconLeft).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true}></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.iconRight).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight and color', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true} color="default"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft and color', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true} color="default"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft and color=primary', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true} color="primary"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft and color=accent', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true} color="accent"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft and color=contrast', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true} color="contrast"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight and color=primary', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true} color="primary"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight and color=accent', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true} color="accent"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight and color=contrast', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true} color="contrast"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component color=primary', () => {
// // // // 	const button = create(
// // // //       <Button color="primary"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with color=accent', () => {
// // // // 	const button = create(
// // // //       <Button color="accent"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with color=cwrapper.props().propsontrast', () => {
// // // // 	const button = create(wrapper.props().props
// // // //       <Button color="contrast"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconRight and color=link', () => {
// // // // 	const button = create(
// // // //       <Button iconRight={true} color="link"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with color=link', () => {
// // // // 	const button = create(
// // // //       <Button color="link"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });

// // // // test('Button component with iconLeft and color=link', () => {
// // // // 	const button = create(
// // // //       <Button iconLeft={true} color="link"></Button>
// // // //   ).toJSON();
// // // // 	expect(button.props.color).toEqual(undefined);
// // // // 	expect(button).toMatchSnapshot();
// // // // });