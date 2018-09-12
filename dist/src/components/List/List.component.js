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
const material_ui_1 = require("material-ui");
const BlueRainList = (props) => {
    return (React.createElement(material_ui_1.List, Object.assign({ style: props.style, className: props.className }, props), props.children));
};
exports.default = BlueRainList;
//# sourceMappingURL=List.component.js.map