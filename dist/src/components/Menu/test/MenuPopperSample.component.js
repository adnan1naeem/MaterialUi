"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const index_1 = require("../index");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const styles = (theme) => ({
    typography: {
        padding: theme.spacing.unit * 2,
    },
});
class SimplePopper extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            // anchorEl: null,
            open: false,
        };
        this.handleClick = (event) => {
            const { currentTarget } = event;
            this.setState({
                anchorEl: currentTarget,
                open: !this.state.open,
            });
        };
    }
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { variant: "contained", onClick: this.handleClick }, "Toggle Popper"),
            react_1.default.createElement(index_1.MenuPopper, { open: open },
                react_1.default.createElement(Paper_1.default, null,
                    react_1.default.createElement(index_1.MenuItem, { value: "xyz" }, "Item 1 "),
                    react_1.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 2 "),
                    react_1.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 3 "),
                    react_1.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 4 "),
                    react_1.default.createElement(index_1.MenuItem, { value: "abc" }, "Item 5 ")))));
    }
}
// SimplePopper.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
exports.default = styles_1.withStyles(styles)(SimplePopper);
//# sourceMappingURL=MenuPopperSample.component.js.map