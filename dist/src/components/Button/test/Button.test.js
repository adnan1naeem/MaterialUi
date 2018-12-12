"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const React = __importStar(require("react"));
const enzyme_1 = require("enzyme");
const _1 = require("../");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
it('renders correctly', () => {
    const tree = enzyme_1.shallow(React.createElement(_1.Button, { muiVariant: "outlined", style: { marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' } }));
    expect(tree).toMatchSnapshot();
});
test('if Button renders correctly ', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { title: "button title" }));
    expect(wrapper).toBeDefined();
});
test('Dark Button with label in Child should have child count > 0 ', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { style: { marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' } }, "Dark "));
    expect(wrapper.props().children).toBeDefined();
});
test('Secondary Button with style prop should be rendered correctly', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { muiVariant: "contained", style: { marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' } }, "Custom"));
    expect(wrapper.props().style).toEqual({ marginLeft: 150, backgroundColor: 'purple', borderColor: 'black', width: 100, justifyContent: 'center', display: 'flex' });
});
test(' Warning Button with disabled prop true should properly render', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { muiVariant: "contained", disabled: true, style: { marginLeft: 150, display: 'flex', justifyContent: 'center', } }, " Disabled"));
    expect(wrapper.props().disabled).toBeTruthy();
});
test(' Danger Button with onPress prop', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { muiVariant: "contained", fullWidth: true, style: { marginLeft: 150, display: 'flex', justifyContent: 'center', } }, "FullWidth"));
    expect(wrapper).toBeDefined();
});
test('Success Button with active prop true', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { muiVariant: "contained", style: { marginLeft: 150, display: 'flex', justifyContent: 'center', }, active: true }, "Active"));
    expect(wrapper.props().active).toBe(true);
});
test(' Default Button with bordered prop true', () => {
    const wrapper = enzyme_1.shallow(React.createElement(_1.Button, { bordered: true, style: { marginLeft: 150, display: 'flex', justifyContent: 'center', } }, " Bordered"));
    expect(wrapper.props().bordered).toBeDefined();
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
// // // // test('Button component with color=contrast', () => {
// // // // 	const button = create(
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
//# sourceMappingURL=Button.test.js.map