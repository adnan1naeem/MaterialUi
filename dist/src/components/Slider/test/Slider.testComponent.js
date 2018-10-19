"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Slider_component_1 = __importDefault(require("../Slider.component"));
const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};
class SimpleSlider extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 50,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
    }
    render() {
        //   const { classes } = this.props;
        const { value } = this.state;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Typography_1.default, { id: "label" }, "Slider label"),
            react_1.default.createElement("div", null, value),
            react_1.default.createElement(Slider_component_1.default, Object.assign({ min: 0, max: 100, defaultValue: 6, value: value, "aria-labelledby": "label", onChange: this.handleChange }, this.props))));
    }
}
exports.default = SimpleSlider;
//# sourceMappingURL=Slider.testComponent.js.map