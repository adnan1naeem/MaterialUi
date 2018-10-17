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
const _1 = require("../");
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
    onChange(value1, value) {
        this.setState({
            value
        });
    }
    render() {
        return (React.createElement(_1.Switch, { value: this.state.value, onValueChange: this.onChange }));
    }
}
exports.default = BlueRainSwitch;
//# sourceMappingURL=Switchtest.js.map