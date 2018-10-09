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
const Card_1 = require("../../Card");
const react_1 = require("@storybook/react");
const Avatar_1 = __importDefault(require("material-ui/Avatar"));
const Typography_1 = __importDefault(require("material-ui/Typography"));
react_1.storiesOf('CardBody', module).add('CardBody with style and children props', () => (React.createElement(Card_1.CardBody, { style: { width: 200, height: 200, backgroundColor: 'white' } },
    React.createElement(Card_1.CardHeader, { avatar: React.createElement(Avatar_1.default, { "aria-label": "Recipe" }, "R"), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" }))));
react_1.storiesOf('CardBody', module).add('CardMedia with className and style prop', () => (React.createElement(Card_1.CardBody, { className: "CardMedia Title", style: { width: 500, backgroundColor: 'orange' } },
    React.createElement(Typography_1.default, { style: { marginBottom: 16, fontSize: 14 } }, "Word of the Day"),
    React.createElement(Typography_1.default, { type: "headline", component: "h2" }, "benevolent"),
    React.createElement(Typography_1.default, { style: { marginBottom: 12 } }, "adjective"),
    React.createElement(Typography_1.default, { component: "p" },
        "well meaning and kindly.",
        React.createElement("br", null),
        '"a benevolent smile"'))));
//# sourceMappingURL=CardBody.stories.js.map