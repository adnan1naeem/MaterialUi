"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Modal_Component_1 = __importDefault(require("../Modal.Component"));
const ModalBody_Component_1 = __importDefault(require("../ModalBody.Component"));
const ModalFooter_Component_1 = __importDefault(require("../ModalFooter.Component"));
const ModalHeader_Component_1 = __importDefault(require("../ModalHeader.Component"));
const react_1 = __importDefault(require("react"));
class ModalStoryComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = () => {
            this.setState({ open: true });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        // this.props=props;
        this.state = {
            open: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { onSubmit: this.handleClickOpen }, "Open Dialog"),
            react_1.default.createElement(Modal_Component_1.default, { open: this.state.open, onClose: this.handleClose, fullWidth: this.props.fullWidth, fullScreen: this.props.fullScreen },
                react_1.default.createElement(ModalHeader_Component_1.default, null, "UserLocation Service"),
                react_1.default.createElement(ModalBody_Component_1.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."),
                react_1.default.createElement(ModalFooter_Component_1.default, null,
                    react_1.default.createElement(Button_1.default, { onSubmit: this.handleClose, color: "primary" }, "Disagree"),
                    react_1.default.createElement(Button_1.default, { onSubmit: this.handleClose, color: "primary" }, "Agree"),
                    react_1.default.createElement(Button_1.default, { onSubmit: this.handleClose, color: "primary" }, "Disagree"),
                    react_1.default.createElement(Button_1.default, { onSubmit: this.handleClose, color: "primary" }, "Agree")))));
    }
}
exports.default = ModalStoryComponent;
//# sourceMappingURL=ModalStory.js.map