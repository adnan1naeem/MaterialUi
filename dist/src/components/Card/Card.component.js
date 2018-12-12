"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const react_1 = __importDefault(require("react"));
const BlueRainCard = props => {
    return (react_1.default.createElement(Card_1.default, Object.assign({}, props, { raised: props.raised, style: props.style, 
        // component={typeof props.tag === 'string' ? props.tag : 'div'}
        className: props.className }), props.children));
};
exports.default = BlueRainCard;
//# sourceMappingURL=Card.component.js.map