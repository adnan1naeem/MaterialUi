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
const Slider_1 = __importDefault(require("@material-ui/lab/Slider"));
const BlueRainSlider = (props) => {
    return (React.createElement(Slider_1.default, Object.assign({ value: props.defaultValue }, props)));
};
exports.default = BlueRainSlider;
//# sourceMappingURL=Slider.component.js.map