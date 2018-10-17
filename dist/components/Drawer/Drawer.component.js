'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MUIDrawer = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _bluerainOs = require('@blueeast/bluerain-os');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

// export const BlueRainDrawer: React.StatelessComponent<MUIDrawerProperties> = (props) => (
// 	<MUIDrawer children={props.content} {...props}/>
// );
var MUIDrawer = exports.MUIDrawer = function MUIDrawer(props) {
    return React.createElement(_bluerainOs.BlueRainConsumer, null, function (BR) {
        return React.createElement(BR.Components.View, null, React.createElement(_Drawer2.default, __assign({ anchor: props.side, transitionDuration: props.tweenDuration, type: props.variant }, props), props.children));
    });
};
//# sourceMappingURL=Drawer.component.js.map