"use strict";
/**
 * Created by M.Ghaznfar on 3/3/18.
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = require("material-ui/Form");
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("material-ui/Checkbox"));
class BlueRainCheckbox extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleChange = (name) => (event) => {
            this.props.onChange ? this.props.onChange() : this.setState({ checked: event.target.checked });
            this.setState({ checked: event.target.checked });
        };
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: props.value ? props.value : false,
        };
    }
    // handleChange =( event:any) => {
    //   this.props.onChange ? this.props.onChange() : this.setState({ checked: event.target.checked });
    //   this.setState({ checked: event.target.checked });
    // }
    render() {
        const _a = this.props, { value, onPress } = _a, others = __rest(_a, ["value", "onPress"]);
        return (react_1.default.createElement(Form_1.FormGroup, { row: true },
            react_1.default.createElement(Form_1.FormControlLabel, { control: react_1.default.createElement(Checkbox_1.default, Object.assign({}, others, { onChange: this.handleChange('checked'), value: this.props.testID, checked: this.state.checked })), label: this.props.label })));
    }
}
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkbox.component.js.map