"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = require("@blueeast/bluerain-os");
// import { Button } from '../../Button';
const Button_1 = __importDefault(require("material-ui/Button"));
const Drawer_1 = require("../../Drawer");
const react_1 = __importDefault(require("react"));
class DrawerTest extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.side = 'left';
        this.state = {
            open: true,
        };
        this.onClose = this.onClose.bind(this);
    }
    onClose() {
        console.log('onClose Activated');
    }
    render() {
        return (react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(Drawer_1.Drawer, { variant: this.props.variant, open: this.state.open, tweenDuration: 500, side: this.side, onClose: () => { this.setState({ open: false }); }, elevation: 200 },
                react_1.default.createElement(Button_1.default, { color: 'primary', onClick: () => { this.setState({ open: false }); } }, "Click to Close")),
            react_1.default.createElement(BR.Components.View, null,
                react_1.default.createElement(BR.Components.Text, null, "Hello World"),
                react_1.default.createElement(Button_1.default, { color: 'primary', onClick: () => { this.side = 'left'; this.setState({ open: true }); } }, "Left"),
                react_1.default.createElement(Button_1.default, { color: 'primary', onClick: () => { this.side = 'right'; this.setState({ open: true }); } }, "Right"),
                react_1.default.createElement(Button_1.default, { color: 'primary', onClick: () => { this.side = 'top'; this.setState({ open: true }); } }, "Top"),
                react_1.default.createElement(Button_1.default, { color: 'primary', onClick: () => { this.side = 'bottom'; this.setState({ open: true }); } }, "Bottom"))))));
    }
}
exports.DrawerTest = DrawerTest;
exports.default = DrawerTest;
//# sourceMappingURL=DrawerTest.component.js.map