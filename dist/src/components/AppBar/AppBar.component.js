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
const bluerain_os_1 = require("@blueeast/bluerain-os");
const AppBar_1 = __importDefault(require("material-ui/AppBar"));
const Toolbar_1 = __importDefault(require("material-ui/Toolbar"));
const style_1 = require("./style");
exports.BlueRainAppBar = (props) => (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (React.createElement(AppBar_1.default, Object.assign({}, props, { style: props.style ? props.style : { position: 'sticky' } }),
    React.createElement(Toolbar_1.default, null,
        React.createElement(BR.Components.View, { style: style_1.style.container },
            React.createElement(BR.Components.View, { style: style_1.style.titleContainer },
                props.left,
                React.createElement(BR.Components.Text, { style: style_1.style.title }, props.title)),
            React.createElement(BR.Components.View, null, props.right)))))));
//# sourceMappingURL=AppBar.component.js.map