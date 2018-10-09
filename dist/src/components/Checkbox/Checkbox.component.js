"use strict";
/**
 * Created by M.Ghaznfar on 3/3/18.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { FormControlLabel, FormGroup } from 'material-ui/Form';
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("material-ui/Checkbox"));
<<<<<<< HEAD
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
=======
const BlueRainCheckbox = (props) => {
    return (react_1.default.createElement(Checkbox_1.default, Object.assign({}, props, { onChange: props.onPress, value: props.testID, checked: props.value })));
};
>>>>>>> 2f5cd9ad455e613494855e1402f97245f8d8255a
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkbox.component.js.map