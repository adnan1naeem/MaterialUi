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
const Switch_component_1 = __importDefault(require("../Switch.component"));
// import console = require('console');
/**
 * The universal props of Avatar Component
 * @param {boolean} props.disabled if true, switch is rendered in disabled form.
 * @param {boolean} props.value value of the switch.
 * @param {function} props.onValueChange Invoked with the new value when the value changes.
 * @param {Object} props.style Style object for switch component.
 *  The specific libraray props of Badge Component
 * @param {string or boolean} props.checked Keeps the value unchanged.
 * @param {Object} props.classes the children on which the switch will append styles.
 * @param {Object} props.onChange  Invoked with the new value when the value changes.
 */
class BlueRainSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.setState({
            value: this.state.value
        });
    }
    render() {
        return (React.createElement(Switch_component_1.default, { value: this.state.value, onValueChange: this.onChange }));
    }
}
exports.default = BlueRainSwitch;
//# sourceMappingURL=Switchtest.js.map