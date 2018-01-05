"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_ui_1 = require("material-ui");
var BlueRainTextInput = function (props) {
    var disabled = false;
    if (props.editable !== undefined && !props.editable) {
        disabled = true;
    }
    return (<material_ui_1.TextField style={props.style} placeholder={props.placeholder} autoFocus={props.autoFocus} onChange={props.onChange} rows={props.numberOfLines} disabled={disabled} {...props}/>);
};
exports.default = BlueRainTextInput;
