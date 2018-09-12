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
const Card_1 = require("../../Card");
const react_1 = require("@storybook/react");
const Button_1 = __importDefault(require("material-ui/Button"));
const styles = {
    bg: {
        backgroundColor: 'white', width: '100%'
    }
};
const footerStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'grey',
};
react_1.storiesOf('CardFooter', module).addDecorator(addon_knobs_1.withKnobs).add('CardFooter with className and style prop', () => {
    const style = addon_knobs_1.object('component style', footerStyle);
    return (React.createElement(Card_1.CardFooter, { className: "bg-footer", style: style }));
});
react_1.storiesOf('CardFooter', module).add('CardFooter with children prop (MUI specific)', () => (React.createElement(Card_1.CardFooter, { disableActionSpacing: true, style: styles.bg },
    React.createElement(Button_1.default, { dense: true }, "Learn More"))));
//# sourceMappingURL=CardFooter.stories.js.map