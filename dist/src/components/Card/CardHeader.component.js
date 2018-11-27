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
const CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
const BlueRainCardHeader = (props) => {
    return (React.createElement(CardHeader_1.default, Object.assign({ style: props.style, title: props.title, subheader: props.subheader ? props.subheader : props.children }, props)));
};
exports.default = BlueRainCardHeader;
//# sourceMappingURL=CardHeader.component.js.map