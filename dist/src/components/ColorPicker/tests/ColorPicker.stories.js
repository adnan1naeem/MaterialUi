"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ColorPicker_1 = require("../../ColorPicker");
const react_1 = require("@storybook/react");
const rgbaAndHsl = { r: 255, g: 247, b: 109, a: 100, h: 180, s: 0.5, l: 0.5 };
const hsl = { h: 180, s: 0.5, l: 0.5 };
function handleTextInputChange() {
    console.log('ColorPicker value changed');
}
react_1.storiesOf('ColorPicker', module).add('all Props', () => React.createElement(ColorPicker_1.ColorPicker, { value: rgbaAndHsl, hs: false, onChange: handleTextInputChange, label: "Picker" }));
react_1.storiesOf('ColorPicker', module).add('with hsl value', () => React.createElement(ColorPicker_1.ColorPicker, { value: hsl, hs: true, label: "HSL" }));
react_1.storiesOf('ColorPicker', module).add('with # code', () => React.createElement(ColorPicker_1.ColorPicker, { value: "#2AF795", hs: false, label: "#Code" }));
react_1.storiesOf('ColorPicker', module).add('with violet as value', () => React.createElement(ColorPicker_1.ColorPicker, { value: "violet", hs: false, label: "string" }));
react_1.storiesOf('ColorPicker', module).add('with no value', () => React.createElement(ColorPicker_1.ColorPicker, { hs: false, label: "no value given" }));
//# sourceMappingURL=ColorPicker.stories.js.map