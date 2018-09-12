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
const Drawer_1 = __importDefault(require("material-ui/Drawer"));
// export const BlueRainDrawer: React.StatelessComponent<MUIDrawerProperties> = (props) => (
// 	<MUIDrawer children={props.content} {...props}/>
// );
exports.MUIDrawer = (props) => (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (React.createElement(BR.Components.View, null,
    React.createElement(Drawer_1.default, Object.assign({ anchor: props.side, transitionDuration: props.tweenDuration, type: props.variant }, props), props.children)))));
//# sourceMappingURL=Drawer.component.js.map