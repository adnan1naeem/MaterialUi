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
const CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
const BlueRainCardAction = props => {
    return React.createElement(CardActions_1.default, Object.assign({}, props), props.children);
};
exports.default = BlueRainCardAction;
//# sourceMappingURL=CardAction.component.js.map