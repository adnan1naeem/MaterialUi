"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
    const { maximumValue, minimumValue, onValueChange, onSlidingComplete, step } = props, others = __rest(props, ["maximumValue", "minimumValue", "onValueChange", "onSlidingComplete", "step"]);
    return (React.createElement(Slider_1.default, Object.assign({ max: maximumValue, min: minimumValue, onChange: onValueChange, onDragEnd: onSlidingComplete, step: step }, others)));
};
exports.default = BlueRainSlider;
//# sourceMappingURL=Slider.component.js.map