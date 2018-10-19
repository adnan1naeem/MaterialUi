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
const style_1 = require("./style");
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const H2 = props => {
    return (React.createElement(bluerain_os_1.default.Components.Text, { style: Object.assign({}, style_1.style, props.style) }, props.children));
};
exports.default = H2;
//# sourceMappingURL=H2.component.js.map