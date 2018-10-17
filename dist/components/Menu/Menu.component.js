'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

/**
 * The props of DropDown Component
 * @param {boolean} props.autoWidth for Auto width.
 * @param {Object} props.classes style object for DopDown style.
 * @param {boolean} props.displayEmpty If true, the selected item is displayed even if its value is empty.
 * You can only use it when the native property is false (default)..
 * @param {ReactNode} props.input An Input element; does not have to be a material-ui specific Input.
 * @param {Object} props.MenuProps Properties applied to the Menu element.
 * @param {boolean} props.native If true, the component will be using a native select element.
 * @param {Node} props.renderValue Render the selected value.
 * You can only use it when the native property is false (default).
 * @param {Node} props.value The input value, required for a controlled component.
 * @param {boolean} props.disabled disables the selection.
 */
// export interface MUIPickerProperties extends MenuProperties {
// 	autoWidth?:boolean,
// 	classes?:object,
// 	displayEmpty?:boolean,
// 	input?:ReactNode,
// 	MenuProps?:object,
// 	native?:boolean,
// 	renderValue?:any,
// 	value?:any,
// 	onChange?:any,
// 	disabled?:boolean
// }
var BRMenu = function BRMenu(props) {
    return _react2.default.createElement(_Menu2.default, __assign({ open: props.open }, props), props.children);
};
exports.default = BRMenu;
//# sourceMappingURL=Menu.component.js.map