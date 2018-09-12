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
const addon_knobs_1 = require("@storybook/addon-knobs");
const Divider_1 = require("../../Divider");
const react_1 = require("@storybook/react");
const stories = react_1.storiesOf('Divider', module);
stories.addDecorator(addon_knobs_1.withKnobs).add('Divider (with knobs)', () => {
    const light = addon_knobs_1.boolean('light prop', false);
    return React.createElement("div", { style: { padding: 20, backgroundColor: 'white' } },
        React.createElement(Divider_1.Divider, { light: light }));
});
stories.add('Divider (with MUI Props)', () => {
    return React.createElement("div", { style: { padding: 20, backgroundColor: 'white' } },
        React.createElement(Divider_1.Divider, { light: false, inset: true }));
});
//# sourceMappingURL=Divider.stories.js.map