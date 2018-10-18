"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import PropTypes from 'prop-types';
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const ClickAwayListener_1 = __importDefault(require("@material-ui/core/ClickAwayListener"));
const Grow_1 = __importDefault(require("@material-ui/core/Grow"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const Popper_1 = __importDefault(require("@material-ui/core/Popper"));
const index_1 = require("../index");
// import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});
class MenuListComposition extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
        };
        this.handleToggle = () => {
            this.setState({ open: !this.state.open });
        };
        this.handleClose = (event) => {
            //  if (this.state.anchorEl.contains(event.target)) {
            return;
            //  }
            // this.setState({ open: false });
        };
    }
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Paper_1.default, null,
                react_1.default.createElement(index_1.MenuList, null,
                    react_1.default.createElement(index_1.MenuItem, null, "Profile"),
                    react_1.default.createElement(index_1.MenuItem, null, "My account"),
                    react_1.default.createElement(index_1.MenuItem, null, "Logout"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Button_1.default, { buttonRef: node => {
                        // this.anchorEl = node;
                    }, "aria-haspopup": "true", onClick: this.handleToggle }, "Toggle Menu Grow"),
                react_1.default.createElement(Popper_1.default, { open: open, transition: true, disablePortal: true }, ({ TransitionProps, placement }) => (react_1.default.createElement(Grow_1.default, Object.assign({}, TransitionProps, { 
                    //  id="menu-list-grow"
                    style: { transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' } }),
                    react_1.default.createElement(Paper_1.default, null,
                        react_1.default.createElement(ClickAwayListener_1.default, { onClickAway: this.handleClose },
                            react_1.default.createElement(index_1.MenuList, null,
                                react_1.default.createElement(index_1.MenuItem, { onClick: this.handleClose }, "Profile"),
                                react_1.default.createElement(index_1.MenuItem, { onClick: this.handleClose }, "My account"),
                                react_1.default.createElement(index_1.MenuItem, { onClick: this.handleClose }, "Logout"))))))))));
    }
}
exports.default = MenuListComposition;
//# sourceMappingURL=MenuTest1.component.js.map