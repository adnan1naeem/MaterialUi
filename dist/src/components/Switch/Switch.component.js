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
const Switch_1 = __importDefault(require("material-ui/Switch"));
const BlueRainSwitch = (props) => {
    return (React.createElement(Switch_1.default, Object.assign({ onChange: props.onValueChange }, props)));
};
exports.default = BlueRainSwitch;
//# sourceMappingURL=Switch.component.js.map