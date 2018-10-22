"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
const style = { root: { padding: 20 }, dropdown: { width: 400 } };
class SimpleSelect extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.multiple ? ['1'] : '1'
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        console.log(event.target.value);
        this.setState({ value: event.target.value });
    }
    render() {
        return (react_1.default.createElement(index_1.Dropdown, Object.assign({}, this.props, { onValueChange: this.onChange, value: this.state.value, autoWidth: true, style: style.dropdown }),
            react_1.default.createElement(index_1.DropdownItem, { value: "1" }, "Item 1 "),
            react_1.default.createElement(index_1.DropdownItem, { value: "2" }, "Item 2 "),
            react_1.default.createElement(index_1.DropdownItem, { value: "3" }, "Item 3 "),
            react_1.default.createElement(index_1.DropdownItem, { value: "4" }, "Item 4 "),
            react_1.default.createElement(index_1.DropdownItem, { value: "5" }, "Item 5 ")));
    }
}
exports.default = SimpleSelect;
//# sourceMappingURL=DemoDropdownComponent.js.map