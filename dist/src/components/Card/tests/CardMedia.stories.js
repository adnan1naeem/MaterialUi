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
const Card_1 = require("../../Card");
const react_1 = require("@storybook/react");
react_1.storiesOf('CardMedia', module).add('CardMedia with src and height:400 prop', () => (React.createElement(Card_1.CardMedia, { height: 400, src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" })));
react_1.storiesOf('CardMedia', module).add('CardMedia with className prop', () => (React.createElement(Card_1.CardMedia, { className: "bg-img", height: 40, src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" })));
react_1.storiesOf('CardMedia', module).add('CardMedia with style prop', () => (React.createElement(Card_1.CardMedia, { src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" })));
//# sourceMappingURL=CardMedia.stories.js.map