"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const __1 = __importDefault(require("../"));
class BlueRainCheckbox extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false,
        };
    }
    handleChange() {
        this.setState({ checked: !this.state.checked });
    }
    render() {
        return (react_1.default.createElement(bluerain_os_1.default.Components.View, null,
            react_1.default.createElement(__1.default, { onPress: this.handleChange, value: this.state.checked })));
    }
}
exports.default = BlueRainCheckbox;
//# sourceMappingURL=Checkboxtest.js.map