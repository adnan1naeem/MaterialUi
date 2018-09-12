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
const Avatar_1 = __importDefault(require("material-ui/Avatar"));
const IconButton_1 = __importDefault(require("material-ui/IconButton"));
const SkipNext_1 = __importDefault(require("material-ui-icons/SkipNext"));
react_1.storiesOf('CardHeader', module).add('CardHeader with title as Node and style props', () => (React.createElement(Card_1.CardHeader, { style: { width: 300, backgroundColor: 'white' }, title: "Title" })));
react_1.storiesOf('CardHeader', module).addDecorator(addon_knobs_1.withKnobs).add('CardHeader with title prop as string', () => (React.createElement(Card_1.CardHeader, { title: addon_knobs_1.text('Title', 'Title') })));
react_1.storiesOf('CardHeader', module).add('CardHeader with children and title prop ', () => (React.createElement(Card_1.CardHeader, { title: "Children" },
    React.createElement(Avatar_1.default, { "aria-label": "Recipe", style: { backgroundColor: 'red' } }, "R"),
    React.createElement(IconButton_1.default, null,
        React.createElement(SkipNext_1.default, null)),
    "\"Shrimp and Chorizo Paella\" \"September 14, 2016\"")));
react_1.storiesOf('CardHeader', module).add('CardHeader with MUI props', () => (React.createElement(Card_1.CardHeader, { avatar: React.createElement(Avatar_1.default, { "aria-label": "Recipe", style: { backgroundColor: 'red' } }, "R"), action: React.createElement(IconButton_1.default, null,
        React.createElement(SkipNext_1.default, null)), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" })));
//# sourceMappingURL=CardHeader.stories.js.map