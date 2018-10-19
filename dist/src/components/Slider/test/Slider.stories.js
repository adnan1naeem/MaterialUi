"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = require("@storybook/react");
const Slider_testComponent_1 = __importDefault(require("./Slider.testComponent"));
react_1.storiesOf('Slider', module).addDecorator(addon_knobs_1.withKnobs)
    .add('SliderComponent', () => React.createElement(Slider_testComponent_1.default, { defaultValue: '6' }));
react_1.storiesOf('Slider', module).addDecorator(addon_knobs_1.withKnobs)
    .add('SliderComponent disabled', () => React.createElement(Slider_testComponent_1.default, { defaultValue: '6', disabled: true }));
react_1.storiesOf('Slider', module).addDecorator(addon_knobs_1.withKnobs)
    .add('SliderComponent vertical', () => React.createElement(Slider_testComponent_1.default, { vertical: true, defaultValue: '6' }));
//# sourceMappingURL=Slider.stories.js.map