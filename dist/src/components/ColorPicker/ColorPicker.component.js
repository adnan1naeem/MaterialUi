"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = require("@blueeast/bluerain-os");
const react_color_1 = require("react-color");
const pickerStyles_1 = require("./pickerStyles");
const Button_1 = __importDefault(require("material-ui/Button"));
const Paper_1 = __importDefault(require("material-ui/Paper"));
const react_1 = __importDefault(require("react"));
class ColorPicker extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker });
        };
        this.handleClose = () => {
            this.setState({ displayColorPicker: false });
        };
        this.handleChangeHsl = (color) => {
            this.setState({ color: color.hsl });
        };
        this.handleChangeRgb = (color) => {
            this.setState({ color: color.rgb });
        };
        this.state = {
            displayColorPicker: false,
            color: this.props.value || 'red',
        };
    }
    getColorPicker(hs, backgroundColor) {
        if (hs) {
            return react_1.default.createElement(react_color_1.ChromePicker, { color: backgroundColor, onChange: this.handleChangeHsl, onChangeComplete: this.props.onChange });
        }
        return react_1.default.createElement(react_color_1.SketchPicker, { color: backgroundColor, onChange: this.handleChangeRgb, onChangeComplete: this.props.onChange });
    }
    render() {
        let backgroundColor = 'blue';
        if (this.props.hs) {
            backgroundColor = 'hsl(20, 100%, 50%)';
            if (this.state.color) {
                if (typeof this.state.color === 'string') {
                    backgroundColor = this.state.color;
                }
                else {
                    if (!(this.state.color.h)) {
                        return (react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (react_1.default.createElement(Paper_1.default, { elevation: 2 },
                            react_1.default.createElement(BR.Components.Text, { style: pickerStyles_1.styles.handleError }, '"Error: Pass prop "value" in hsl format as prop "hs" is true, demanding hsl values."')))));
                    }
                    const bgS = (this.state.color.s || 0.5) * 100;
                    const bgL = (this.state.color.l || 0.5) * 100;
                    backgroundColor = `hsl(${this.state.color.h}, ${bgS}%, ${bgL}%)`;
                }
            }
        }
        else if (this.state.color) {
            backgroundColor = typeof this.state.color === 'string' ? this.state.color : `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
        }
        return (react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (react_1.default.createElement(BR.Components.View, { style: pickerStyles_1.styles.colorControl },
            react_1.default.createElement(BR.Components.Text, null, this.props.label),
            react_1.default.createElement(BR.Components.View, { style: pickerStyles_1.styles.onLeft },
                react_1.default.createElement(Paper_1.default, { elevation: 2, style: pickerStyles_1.styles.padding5 },
                    react_1.default.createElement(Button_1.default, { raised: true, style: { display: 'flex', justifyContent: 'center', backgroundColor, minHeight: 14, minWidth: 36 }, onClick: this.handleClick }),
                    this.state.displayColorPicker ? react_1.default.createElement(Paper_1.default, { elevation: 2 },
                        react_1.default.createElement(BR.Components.View, { style: pickerStyles_1.styles.popover },
                            react_1.default.createElement(BR.Components.View, { style: pickerStyles_1.styles.cover }),
                            this.getColorPicker(this.props.hs, backgroundColor))) : null))))));
    }
}
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=ColorPicker.component.js.map